import { Button } from "./Button";

export function Friend({ friend, onSelectFriend, onDeleteFriend, onUpdateFriend, selectedFriend }) {
    const id = friend.id;

    function handleDelete() {
        onDeleteFriend(id);
    }

    function handleUpdate() {
        const updatedFriend = { ...friend, name: "Updated Name" }; // You can replace this with your update logic
        onUpdateFriend(updatedFriend);
    }

    return (
        <div className={`friend flex flex_ai ${selectedFriend === id ? "selected" : ""}`}>
            <img className="friend__img" src={friend.image} alt="" />
            <div className="friend__detail">
                <div className="friend__name">{friend.name}</div>
                <div className={`friend__status ${friend.balance < 0 && "red"} ${friend.balance > 0 && "green"} ${friend.balance === 0 && ""}`}>
                    {friend.balance < 0
                        ? `You owe ${friend.name} ${friend.balance}$`
                        : friend.balance > 0
                            ? `${friend.name} owes you ${friend.balance}$`
                            : `You and ${friend.name} are even`}
                </div>
            </div>
            <Button onClick={() => onSelectFriend({ id })}>
                {selectedFriend === id ? "close" : "select"}
            </Button>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </div>
    );
}
