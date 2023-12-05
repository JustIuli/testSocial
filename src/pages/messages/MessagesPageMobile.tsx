import { Input, Button, Avatar } from "@nextui-org/react";
import { useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import ReceivedMessage from "../../components/message/ReceivedMessage";
import SentMessage from "../../components/message/SentMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage, faPaperPlane, faSearch,} from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalContent, ModalBody, useDisclosure} from "@nextui-org/react";
import GroupHeaderMobile from "../../components/message/GroupHeaderMobile";

const MessagesPageMobile = () => {
  const {
    isOpen:isOpenChatsMenu,
    onOpen:onOpenChatsMenu,
    onOpenChange:OnOpenChangeChatsMenu
  } = useDisclosure();
  const {
    isOpen:isOpenGroupMenu,
    onOpen:onOpenGroupMenu,
    onOpenChange:OnOpenChangeGroupMenu
  } = useDisclosure();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };
  const messages = [1, 2, 3, 4, 5];
  return (
    
    <div className="bg-[#1E2126] h-screen flex no-scrollbar">

      <div className="bg-[#1E2126] hidden">
          
          <div>
          <div className="flex mt-4 w-full space-x-1 py-2 px-2">
            


          <Modal 
              backdrop="opaque" 
              isOpen={isOpenChatsMenu}
              size="md"
              scrollBehavior="inside"
              placement="center"
              onOpenChange={OnOpenChangeChatsMenu}
          >
        <ModalContent>
         {/*
             // @ts-expect-error  */}
          {(onClose) => (
            <>
              <ModalBody className="dark bg-[#1E2126] rounded-xl">
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
          
      </div>
</div>
</div>



      <div className="bg-[#16191C] w-[100%] text-white">
              <GroupHeaderMobile onOpenGroupMenu={onOpenGroupMenu} onOpenChatsMenu={onOpenChatsMenu}/>
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
          
      <Modal 
              backdrop="opaque" 
              isOpen={isOpenGroupMenu}
              size="md"
              scrollBehavior="inside"
              placement="center"
              onOpenChange={OnOpenChangeGroupMenu}
          >
        <ModalContent>
         {/*
             // @ts-ignore  */}
          {(onClose) => (
            <>
              <ModalBody className="dark bg-[#1E2126] rounded-xl">
                  <h1 className="m-6 text-neutral-300 font-medium text-lg">
                    Group Members
                  </h1>
                    {/*
                      // @ts-ignore  */}
                  {messages.map((elem , key) => {
                    const randomId = Math.floor(Math.random() * 70) + 1;
                  return <>
                  <div className="text-white flex space-x-2 items-center">
                    <Avatar size='md' key={key} src={`https://i.pravatar.cc/150?img=${randomId}`}/>
                    <p>John McDoe</p>
                  </div>
                  </>
                })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      </div>

  );
};

export default MessagesPageMobile;
