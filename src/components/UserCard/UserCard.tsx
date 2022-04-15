import React from 'react'
import { User } from 'models'
import { Text } from 'components/ui/atoms'

type UserCardProps = {
    user: User
}

function UserCard(props: UserCardProps): JSX.Element {
    const { user } = props
    return (
        <div className="p-4 bg-white shadow shadow-gray-400 rounded">
            <div
                className="grid gap-4 items-center"
                style={{ gridTemplateColumns: '80px 1fr' }}
            >
                <div className="w-20 h-20 rounded-full">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="user-logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <Text size="subtitle2">
                        {`${user.firstName} ${user.lastName}`}
                    </Text>
                    <Text size="body1">{user.role}</Text>
                    <Text size="caption">{user.phone}</Text>
                    <Text size="caption">{user.email}</Text>
                </div>
            </div>
        </div>
    )
}

export default UserCard
