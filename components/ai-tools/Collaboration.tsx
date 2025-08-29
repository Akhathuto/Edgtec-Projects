
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Users, Send } from 'lucide-react';

const Collaboration: React.FC = () => {
    const [messages, setMessages] = useState([
        { user: "Alice", text: "Hey everyone, let's start brainstorming for the new campaign." },
        { user: "Bob", text: "Great idea! I was thinking we could try an AI-generated video." }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { user: "You", text: newMessage }]);
            setNewMessage("");
        }
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="h-6 w-6 text-indigo-600" /> Real-time Collaboration</CardTitle>
                <CardDescription>Work together with your team on creative projects.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-[500px]">
                <div className="flex-grow border rounded-lg p-4 space-y-4 overflow-y-auto bg-slate-50 dark:bg-slate-800">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-lg max-w-xs ${msg.user === 'You' ? 'bg-indigo-500 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>
                                <p className="text-sm font-semibold">{msg.user}</p>
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
                    <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow"
                    />
                    <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
export default Collaboration;
