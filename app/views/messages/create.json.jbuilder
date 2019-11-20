json.user_name @message.user.name
json.content @message.content
json.image_url @message.image.url
json.date @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
json.message_id @message.id
json.group_id @message.group.id
