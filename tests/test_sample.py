import send_request

adminCreds = {"email":"admin@gmail.com", "password":"12345"}
user1Creds = {"email": "user1@gmail.com", "password": "12345"}
user2Creds = {"email": "user2@gmail.com", "password": "12345"}

def test_login():
     loginRequest = send_request.login(adminCreds)
     assert loginRequest.status_code == 200

def test_create_group():
     user1token = send_request.login(user1Creds).json()['data']['token']
     createGroupRequest = send_request.create_group(user1token, user2Creds['email'])
     global groupId
     groupId = createGroupRequest.json()['data']['id']
     assert createGroupRequest.status_code == 200

def test_create_message():
     user2token = send_request.login(user2Creds).json()['data']['token']
     createMsgRequest = send_request.send_message(user2token, groupId)
     global messageId 
     messageId = createMsgRequest.json()['data']['id']
     assert createMsgRequest.status_code == 200

def test_like_message():
     user2token = send_request.login(user2Creds).json()['data']['token']
     likeMsgRequest = send_request.like_message(user2token, messageId)
     assert likeMsgRequest.status_code == 200

def test_delete_group_by_non_owner():
     user2token = send_request.login(user2Creds).json()['data']['token']
     deleteGroupRequest = send_request.delete_group(user2token,groupId)
     assert deleteGroupRequest.status_code == 400

def test_delete_group_by_owner():
     user1token = send_request.login(user1Creds).json()['data']['token']
     deleteGroupRequest = send_request.delete_group(user1token,groupId)
     print(deleteGroupRequest.json())
     assert deleteGroupRequest.status_code == 200



