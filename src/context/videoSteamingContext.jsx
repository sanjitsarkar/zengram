import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import Peer from "simple-peer";
import { formatUserInfo } from "../utils";
import { useSocket } from "./socketContext";

const VideoSteamingContextContext = createContext();
const VideoSteamingContextProvider = ({ children }) => {
  const { socket } = useSocket();
  const user = useSelector((state) => state.auth.user);
  const [stream, setStream] = useState();
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const myVideoRef = useRef();
  const userVideoRef = useRef();
  const connectionRef = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideoRef.current.srcObject = currentStream;
      });
    socket.on("callUser", ({ from, signalData }) => {
      setCall({ isCallRecieved: true, from, signalData });
    });
  }, []);
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signalData: data, to: call.from });
    });
    peer.on("stream", (currentStream) => {
      userVideoRef.current.srcObject = currentStream;
    });
    peer.signal(call.signalData);
    connectionRef.current = peer;
  };
  const callUser = (to) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        signalData: data,
        to,
        from: formatUserInfo(user),
      });
    });
    peer.on("stream", (currentStream) => {
      userVideoRef.current.srcObject = currentStream;
    });
    socket.on("callAccepted", (signalData) => {
      setCallAccepted(true);
      peer.signal(signalData);
    });
  };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };
  return (
    <VideoSteamingContextContext.Provider value={{
      call,
      callAccepted,
      callEnded,
      leaveCall,
      answerCall,
      callUser,
      myVideoRef,userVideoRef,
      stream,
      

    }}>
      {children}
    </VideoSteamingContextContext.Provider>
  );
};

const VsevideoSteamingContext = () => useContext(VideoSteamingContextContext);
export { VsevideoSteamingContext, VideoSteamingContextProvider };
