import React, { useEffect, useRef, useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { useTheme } from "@react-navigation/native";
import { Input } from "../../../../components/Input";
import Send from "../../../../assets/svg/send.svg"

const Chat = () =>{
  const state = useSelector(state => state.slice)
  const { colors } = useTheme()
  const {user1: avatar1, user2: avatar2} = {user1: "https://avatars.githubusercontent.com/u/1?v=4", user2: "https://avatars.githubusercontent.com/u/2?v=4"}
  const [messages, setMessages] = useState([
    {
      id: 0,
      owner: {
        id: 1,
        name: "You",
        avatar: avatar1
      },
      message: "hello",
    },{
      id: 1,
      owner: {
        id: 2,
        name: "Me",
        avatar: avatar2
      },
      message: "hello",
    },{
      id: 2,
      owner: {
        id: 1,
        name: "You",
        avatar: avatar1
      },
      message: "how are you",
    },{
      id: 3,
      owner: {
        id: 2,
        name: "Me",
        avatar: avatar2
      },
      message: "i'm fine! End you?",
    },{
      id: 4,
      owner: {
        id: 1,
        name: "You",
        avatar: avatar1
      },
      message: "thank you i'm fine too",
    },{
      id: 5,
      owner: {
        id: 2,
        name: "Me",
        avatar: avatar2
      },
      message: "do you want to download my app?",
    }, {
      id: 6,
      owner: {
        id: 1,
        name: "You",
        avatar: avatar1
      },
      message: "yes sure!",
    }
  ])
  const [modal, setModal] = useState({visible: false, message: {id: null, ownerId: null}})
  const [input, setInput] = useState("")
  const flastListRef = useRef(null)
  const closeModal = () =>{
    setModal({visible: false, message: {id: null, ownerId: null}})
  }

  const deleteMessage = (messageId) =>{
    let msgs = [...messages]
    msgs = msgs.filter(msg => msg.id !== messageId)
    setMessages(msgs)
    closeModal()
  }

  const scrollToBottom = () =>{
    flastListRef?.current?.scrollToEnd({animated: true})
  }

  const sendMessage = ({name, ownerId, message}) =>{
    const msg = {
      id: null,
      owner: {
        id: null,
        name: null,
        avatar: null
      },
      message: null,
    }
    let lastId = [...messages][messages.length -1].id
    msg["id"] = lastId + 1
    msg["owner"]["id"] = ownerId
    msg["owner"]["name"] = name
    msg["owner"]["avatar"] = ownerId === 2 ? avatar2 : avatar1
    msg["message"] = message
    setInput("")
    setMessages(msgs => [...msgs, msg])
    scrollToBottom()
  }

  return (
    <View style={styles.container}>
      <View style={{
        marginBottom: 50,
        flex: 1
      }}>
        <FlashList
          ref={flastListRef}
          onLoad={() =>{
            scrollToBottom()
          }}
          renderItem={({item}) =>(
            <TouchableHighlight underlayColor={colors.secondary} delayLongPress={1000} onLongPress={() =>{
              console.log("on long press")
              //if(state.userId === item.owner.id) setModalVisible(true)
              if(state.userId === item.owner.id) setModal({visible: true, message: {id: item.id, ownerId: item.owner.id}})
            }}>
              <View style={styles.aMessageBox}>
                <Image source={{uri: item.owner.avatar}} style={[styles.avatar]} />
                <View>
                  <Text style={[styles.username, {color: colors.text}]}>{item.owner.name}</Text>
                  <Text style={[styles.message, {color: colors.text}]}>{item.message}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
          data={messages}
          estimatedItemSize={25}
        />
      </View>

      <View style={[styles.inputView, {borderTopColor: colors.tertiary}]}>
        <Input
          style={[styles.input, {backgroundColor: colors.tertiary, color: colors.text}]}
          multiline={true}
          onChangeText={t => setInput(t)}
          value={input}
          placeholder={`Message @You`}
          placeholderTextColor={colors.secondaryText}
        />
        <TouchableOpacity onPress={() =>{
          if(input.length > 0) sendMessage({name: state.email, ownerId: state.userId, message: input})
        }} style={[styles.sendButton, {backgroundColor: colors.blueButton}]}>
          <Send width={25} height={25} fill={colors.text} viewBox={"0 0 50 50"} />
        </TouchableOpacity>
      </View>


      <Modal
        visible={modal.visible}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() =>{
          closeModal()
        }}
      >
        <View style={styles.modal}>
          <Pressable style={{flex: 1, opacity: 0.5, backgroundColor: colors.secondary}} onPress={() =>{
            closeModal()
          }}>

          </Pressable>
          <View style={[styles.modalsBottom, {backgroundColor: colors.secondary}]}>
            {state.userId === modal.message.ownerId ? (
              <TouchableOpacity style={styles.modalChoices} onPress={() => deleteMessage(modal.message.id)}>
                <Text style={[styles.modalChoicesText, {color: colors.text}]}>Delete Message</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  )
}


const topRadius = 15
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aMessageBox: {
    width: "100%",
    minHeight: 45,
    flexDirection: "row",
    marginVertical: 5
  },
  avatar: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20
  },
  message: {
    fontSize: 16
  },
  username: {
    fontSize: 16,
    fontWeight: "bold"
  },
  modal: {
    flex: 1
  },
  modalsBottom: {
    width: "100%",
    borderTopRightRadius: topRadius,
    borderTopLeftRadius: topRadius,
    height: "30%",
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  modalChoices: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  modalChoicesText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  inputView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 45,
    maxHeight: 80,
    zIndex: 999,
    borderTopWidth: 1,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  input: {
    width: "85%",
    height: "90%",
    alignSelf: "center",
    borderRadius: 15,
    paddingHorizontal: 10
  },
  sendButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Chat
