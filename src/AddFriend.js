import { useState } from "react";
import { Button } from "./Button";

export function AddFriend({ onAddFriend, onDeleteFriend, onUpdateFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleForm(e) {
        e.preventDefault();
        if (!name) return;

        const id = crypto.randomUUID();
        const newFriend = {
            name,
            id,
            balance: 0,
            image,
        };

        onAddFriend(newFriend);
        setName("");
    }

    return (
        <form className="add-friend flex flex-column" onSubmit={handleForm}>
            <div className="flex add-friend__item">
                <label htmlFor="name">🧍 Friend name</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex add-friend__item">
                <label htmlFor="image">🖼️ Image url</label>
                <input
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <Button type="submit">Add</Button>
        </form>
    );
}
