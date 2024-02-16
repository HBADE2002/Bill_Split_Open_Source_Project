import { Friend } from "./Friend";

export function FriendList({ friends, onSelectFriend, selectedFriend, onDeleteFriend, onUpdateFriend }) {
    return (
        <div className="friend__container flex flex-column">
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelectFriend={onSelectFriend}
                    onDeleteFriend={onDeleteFriend}
                    onUpdateFriend={onUpdateFriend}
                    selectedFriend={selectedFriend}
                />
            ))}
        </div>
    );
}
