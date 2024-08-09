import CallAPI from './api/user/page';
import {ImageUploader} from './components/UserProfile';
import Avatar from './components/UserProfile';
export default function Home() {
    return (
        <main>
            <h1>Hello World!</h1>
            <CallAPI />
            <ImageUploader/>
            <Avatar/>
        </main>
    );
}