import { Input, Button, Avatar } from "@nextui-org/react";
import { useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import ReceivedMessage from "../../components/message/ReceivedMessage";
import SentMessage from "../../components/message/SentMessage";
import GroupHeader from "../../components/message/GroupHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faGear, faImage, faPaperPlane, faSearch, } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
const MessagesPageDesktop = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };
  const messages = [1, 2, 3, 4, 5];
  return (
    
    <div className="bg-[#1E2126] h-screen flex">



      <div className="bg-[#1E2126] w-[30%] flex">
          
          <NavBar/>
          
          <div>
          <div className="flex mt-4 w-full space-x-1 py-2 px-2">
            {/*
             // @ts-expect-error  */}
            <Input size="xs"
              placeholder="Search a conv..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button isIconOnly className="py-3 px-3" onClick={sendMessage}>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>
            </div>
            <div className="flex justify-center">
                <Button className="bg-purple-500 py-3   mt-4" onClick={sendMessage}>
                  Create new Chat
                </Button>
            </div>
            <div className="m-4 space-y-12 max-h-[70vh] mt-4 ">
            {/* 
                // @ts-ignore */}
            <ScrollableFeed className="no-scrollbar space-y-7 mt-4 ">
  
                {messages.map(() => {
                  const randomId = Math.floor(Math.random() * 70) + 1;
                 return <>
                    <div className="text-white flex space-x-2 items-center">
                      <Avatar size='md' src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                      <p>John McDoe</p>
                    </div>
                    <div className="text-white flex space-x-2 items-center">
                      <Avatar size='md' src="https://placehold.co/30"/>
                      <div>
                          <p>The best Group</p>
                          <p className="text-sm text-neutral-500">Cel mai tare mesaj efectiv..</p>
                      </div>
                    </div>
                </>
              })}
  
            </ScrollableFeed>
            </div>
  
          </div>
          
      </div>




      <div className="bg-[#16191C] w-[60%] text-white">
        <GroupHeader />

        <div className="m-4 space-y-12 max-h-[84vh]">
          {/* 
              // @ts-ignore */}
          <ScrollableFeed className="no-scrollbar space-y-7">
            <ReceivedMessage />
            <ReceivedMessage />

            <SentMessage />

            <ReceivedMessage />

            <SentMessage />
            <SentMessage />

            <ReceivedMessage />
          </ScrollableFeed>
        </div>

        <div className="flex items-center space-x-2 mx-2">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button isIconOnly className="py-7 px-7" onClick={sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Button>
          <Button isIconOnly className="py-7 px-7" onClick={sendMessage}>
            <FontAwesomeIcon icon={faImage} size="lg" />
          </Button>
        </div>
      </div>




      <div className="bg-[#1E2126]">
          <div className="flex justify-center mt-8">
              <div className="bg-[#16191C] items-center flex justify-evenly space-x-2 py-2 xl:px-12">
                <div className="flex items-center justify-evenly space-x-8">


                <div className="flex space-x-2 items-center">
                      <Avatar size='md' src='https://i.pravatar.cc/150?img=67'/>
                      <div>
                          <p className="text-white">John Doe</p>
                          <div className="flex items-center justify-center space-x-2">
                            <FontAwesomeIcon icon={faCircle} size="2xs" className="text-green-500"/>
                            <p className="text-white">Online</p>
                          </div>
                      </div>
                </div>


                  <Button isIconOnly className="py-5 px-5" onClick={sendMessage}>
                      <FontAwesomeIcon icon={faGear} size="lg" />
                  </Button>
                  </div>
              </div>
          </div>
          <h1 className="m-6 text-neutral-300 font-medium text-lg">
            Group Members
          </h1>
          <div className="m-4 space-y-12 max-h-[70vh]">
          {/* 
              // @ts-ignore */}
          <ScrollableFeed className="no-scrollbar space-y-7">

              {messages.map(() => {
                const randomId = Math.floor(Math.random() * 70) + 1;
               return <>
              <div className="text-white flex space-x-2 items-center">
                <Avatar size='md' src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                <p>John McDoe</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <Avatar size='md' src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                <p>John McDoe</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <Avatar size='md' src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                <p>John McDoe</p>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <Avatar size='md' src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                <p>John McDoe</p>
              </div></>
            })}

          </ScrollableFeed>
          </div>
      </div>
    </div>
  );
};

export default MessagesPageDesktop;
