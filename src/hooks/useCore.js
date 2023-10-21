import Peer from "peerjs";
import { useStore } from 'vuex';
import { baseUid } from "@/utils/comm";

let peer;
let userList = new Map();

// 初始化Peer
export const initPeer = () => {
    let uid = localStorage.getItem("uid");
    if (!uid) uid = getUuid();
    peer = new Peer(baseUid + uid);
    const store = useStore();
    // 初始化完成
    peer.on("open", id => {
        store.commit("isOnline", true)
        localStorage.setItem("uid", uid);
        console.log("ok", uid);
    })
    // 被连接
    peer.on("connection", (conn) => {
        console.log("已连接2", getShortid(conn.peer));
        userList.set(getShortid(conn.peer), conn);
        // 接收消息
        conn.on("data", (data) => {
            console.log(data);
            receiveMsg(data);
        })
    })
}

// 添加一个好友
export const addUser = (uid) => {
    let conn = peer.connect(baseUid + uid);
    conn.on('open', () => {
        userList.set(uid, conn);
        console.log("已连接1", uid);
        sendMsg(conn,"testa")
    })
}

// 发送一个消息
export const sendMsg = (conn, msg) => {
    conn.send(msg);
}

// 处理接收的消息
function receiveMsg(){

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