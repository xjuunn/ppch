import Peer from "peerjs";
import { useStore } from 'vuex';
import { baseUid, defaultImg } from "@/utils/comm";

let uid;
let peer;
let userList = new Map();
export let userInfoList = new Map();
let receiveMsgHandler = new Map();
let userinfolistchangehandler = [];
let msgcallback;
// 初始化Peer
export const initPeer = () => {
    uid = localStorage.getItem("uid");
    if (!uid) uid = getUuid();
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo == null) {
        userInfo = {
            img: defaultImg,
            uid: uid,
            name: uid,
            content: "无消息",
            online: true
        }
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    initReceiveMsgHandler();
    peer = new Peer(baseUid + uid);
    const store = useStore();
    // 初始化完成
    peer.on("open", id => {
        store.commit("isOnline", true)
        localStorage.setItem("uid", uid);
        console.log("ok", uid);
        reConnect();
    })
    // 被连接
    peer.on("connection", (conn) => {
        console.log("已连接2", getShortid(conn.peer));
        userList.set(getShortid(conn.peer), conn);
        // 接收消息
        conn.on("data", (data) => {
            receiveMsg(data);
        })

        setTimeout(() => {
            sendMsg(conn, {
                type: "用户信息",
                uid,
                data: getUserInfo(),
            })
        }, 2000);
    })
}

// 初始化消息处理Map
function initReceiveMsgHandler() {
    addReceiveMsgHandler("用户信息", (data) => {
        userInfoList.set(data.uid, data.data);
        saveUserInfoList();
        onUserInfoListChange();
    })
    addReceiveMsgHandler("私聊消息", (data) => {
        // console.log("收到私聊消息", data);
        msgcallback(data);
    })
}

// 回调 用来传递消息给界面
export const getMsgCallback = (callback) => {
    msgcallback = callback;   
}


// 添加一个消息处理
export const addReceiveMsgHandler = (str, handler) => {
    receiveMsgHandler.set(str, handler);
}

// 添加一个好友
export const addUser = (uid1) => {
    if (uid1 == uid) return;
    if (userList.get(uid1)) return;
    let conn = peer.connect(baseUid + uid1);
    conn.on('open', () => {
        userList.set(uid1, conn);
        console.log("已连接1", uid1);
        sendMsg(conn, {
            type: "用户信息",
            uid,
            data: getUserInfo(),
        })
    })
    conn.on("data", (data) => {
        receiveMsg(data);
    })

}

// 发送一个消息
export const sendMsg = (conn, msg) => {
    conn.send(JSON.stringify(msg));
}

// 通过uid发送一个信息
export const sendMsgByUid = (uid, msg) => {
    sendMsg(getConnById(uid), msg);
}

/* 
    {
        type:"用户信息",
        uid:"",
        name:"",
        token:"",
        data:{},
        time:"",
    }
*/
// 处理接收的消息
function receiveMsg(rec) {
    let rec2 = JSON.parse(rec);
    receiveMsgHandler.get(rec2.type)(rec2);
}

// get用户的信息
export const getUserInfo = () => {
    return JSON.parse(sessionStorage.getItem("userInfo"));
}

// set用户的信息
export const setUserInfo = (userinfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userinfo));
}

// 用户信息列表被改变
function onUserInfoListChange() {
    userinfolistchangehandler.forEach(handler => {
        handler();
    });
}

// 添加一个用户列表改变的回调
export const addUserListChangeHandler = (handler) => {
    userinfolistchangehandler.push(handler);
}

// 保存用户信息列表
function saveUserInfoList() {
    sessionStorage.setItem("userinfolist", JSON.stringify(userInfoList, replacer));
}

// 根据保存的用户信息重连
function reConnect() {
    if (sessionStorage.getItem("userinfolist")) {
        userInfoList = JSON.parse(sessionStorage.getItem("userinfolist"), reviver);
        if (userInfoList) {
            userInfoList.forEach(item => {
                addUser(item.uid);
            });
        }
    }

}

function getUuid() {
    return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
function getShortid(longid) {
    return longid.replace(baseUid, "");
}
function getConnById(id) {
    return userList.get(id);
}
function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}
