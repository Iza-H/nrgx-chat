import { Participant } from '../model/participant';
import { Thread } from '../model/thread';
import { Message } from '../model/Message';


export interface AllUserData {
    participantes: Participant[];
    threads: Thread[];
    messages: Message[];
}