import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

interface Post {
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {
        type: 'paragraph' | 'link';
        content: string;
    }[];
    publishedAt: Date;
}

const posts: Post[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/joyceorlandini.png',
            name: 'Joyce Orlandini',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋',},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-12-28 15:45:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/matemora.png',
            name: 'Mateus Morais',
            role: 'Meneger Dev group @ genesis-dataculture',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋',},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-12-27 15:45:00'),
    },
];


export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
            
            <Sidebar />

            <main>
                {posts.map(post => {
                    return (
                    <Post 
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                    />)
                })}
            </main>
        </div>


          
    </div>
  )
}


