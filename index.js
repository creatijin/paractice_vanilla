/* JS는 이 파일내에서만 작업해주세요. */

// 수정하지 마세요.
import CHAT_DATA from './lib/chatHistory.json';

// `CHAT_DATA`라는 변수에 채팅 히스토리가 담겨있습니다. 이 데이터를 이용하시면 됩니다.

(function() {
/*	

		var chatInfo = setInterval(function(){

		if (CHAT_DATA[chatIndex].payload.type === "message") {
			chatUserId = CHAT_DATA[chatIndex].payload.user.id;
			chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
			chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;
			userMessage = CHAT_DATA[chatIndex].payload.message.text;
			console.log(chatDisplayName,chatUserName,userMessage);

			chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + '</span><br><span class="user_message"> - ' + userMessage + '</span></div>'
			
		} else if (CHAT_DATA[chatIndex].payload.type === "connect") {
			chatUserId = CHAT_DATA[chatIndex].payload.user.id;
			chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
			chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;
			
			chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_connect_box" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + ' 님이 접속하셨습니다.</span></div>'

		} else if (CHAT_DATA[chatIndex].payload.type === "update") {
			//유저정보 업데이트
			if (CHAT_DATA[chatIndex].payload.user) {
				var updataName = document.querySelectorAll('[data-user-id="' + chatUserId + '"]');
				var prevUserName = updataName[0].textContent;
				chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = 
				console.log(updataName);
				console.log("업데이트");
			}
			
			//유저닉네임 변경
			//유저 메시지 변경
			// console.log("업데이트");

		} else if (CHAT_DATA[chatIndex].payload.type === "delete") {
			//메세지 삭제
			console.log("삭제")
		} else if (CHAT_DATA[chatIndex].payload.type === "disconnect") {
			//로그아웃
			console.log("로그아웃")
		}


		chatIndex++;
	},CHAT_DATA[chatIndex].delta);
*/
	var chatBoxInnerElement = document.querySelector('.chat_inner ul');
	
	var chatIndex = 0,
		chatType,
		chatTime,
		chatDisplayName,
		chatUserName,
		chatUserId,
		userMessage,
		userMessageId;

	for (var i = 0; i < CHAT_DATA.length; i++) {

		(function (chatIndex) {
			setTimeout(() => {
				if (CHAT_DATA[chatIndex].payload.type === "message") {
					// chatUserId = CHAT_DATA[chatIndex].payload.user.id;
					chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
					chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;
					userMessage = CHAT_DATA[chatIndex].payload.message.text;
					userMessageId = CHAT_DATA[chatIndex].payload.message.id;
					console.log(chatDisplayName,chatUserName,userMessage);
		
					chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box userId_'+ chatUserId  +'" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + '</span><br><span class="user_message" ' + "id = message_" + userMessageId + '> - ' + userMessage + '</span></div>'
					
				} else if (CHAT_DATA[chatIndex].payload.type === "connect") {
					chatUserId = CHAT_DATA[chatIndex].payload.user.id;
					chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
					chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;
					
					chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box userId_'+ chatUserId  +'" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + ' 님이 접속하셨습니다.</span></div>'
		
				} else if (CHAT_DATA[chatIndex].payload.type === "update") {
					if (CHAT_DATA[chatIndex].payload.hasOwnProperty('user')) {

						chatUserId = CHAT_DATA[chatIndex].payload.user.id;
						chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
						chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;

						chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box userId_'+ chatUserId  +'" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + ' 로 닉네임을 업데이트하셨습니다.</span></div>'
					
					} else if (CHAT_DATA[chatIndex].payload.hasOwnProperty('message')) {
						
						chatUserId = CHAT_DATA[chatIndex].payload.message.id;
						userMessage = CHAT_DATA[chatIndex].payload.message.text;
						
						chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box userId_'+ chatUserId  +'" data-user-id="' + chatUserId + '"><span class="user_message"> - ' + userMessage + '</span></div>'
					}
					
				} else if (CHAT_DATA[chatIndex].payload.type === "delete") {
					var deleteMessageId = 'message_'+CHAT_DATA[chatIndex].payload.message.id;
					var foo = document.getElementById(deleteMessageId);
					foo.remove();

				} else if (CHAT_DATA[chatIndex].payload.type === "disconnect") {
					chatUserId = CHAT_DATA[chatIndex].payload.user.id;
					chatDisplayName = CHAT_DATA[chatIndex].payload.user.display_name;
					chatUserName = CHAT_DATA[chatIndex].payload.user.user_name;

					chatBoxInnerElement.appendChild(document.createElement("li")).innerHTML = '<div class="user_message_box userId_'+ chatUserId  +'" data-user-id="' + chatUserId + '"><span class="user_name" data-name="' + chatUserName + '">' + chatDisplayName + ' 님이 퇴장 하셨습니다.</span></div>'
				}	
			}, CHAT_DATA[chatIndex].delta);
		})(i);
	}
})();




