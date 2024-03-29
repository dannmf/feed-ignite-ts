/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Comment} from '../comment/Comment'
import { Avatar } from '../avatar/Avatar'
import {useState} from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: string;
}

export function Post({author, publishedAt, content}: PostProps) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')


        function handleCreateNewComment(){
            event.preventDefault();
            setComments([...comments, newCommentText])
            setNewCommentText('')
        }

        function handleNewCommentChange(){
            setNewCommentText(event.target.value)
        }

        function handleNewCommentInvalid(){
            event.target.setCustomValidity('Este campo é obrigatório!')
            event.target.setCustomValidity('') 
        }

        function deleteComment(commentToDelete){
            const commentsWithoutDeletedOne = comments.filter(comment => {
                return comment !== commentToDelete;
            })
            setComments(commentsWithoutDeletedOne)
        }

       const isNewCommentEmpty = newCommentText.length === 0

        const publishedDateFormat = format(
            publishedAt, 
            "d 'de' LLLL 'as' HH':'mm'h'", 
            {locale: ptBR}
        )
    const publishedRelativeToNow = formatDistanceToNow(
            publishedAt, 
            {locale: ptBR, addSuffix: true}
        )


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>

                {content.map(line => {

                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } 
                    else if (line.type === 'link') {
                        return <p key={line.content}><a href="##">{line.content}</a></p>;
                    }

                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}> 
                <strong>Deixe seu feedback</strong>

                <textarea onChange={handleNewCommentChange}  name='comment'  placeholder="Deixe seu comentário..." value={newCommentText} required onInvalid={handleNewCommentInvalid} ></textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment} content = {comment} onDeleteComment = {deleteComment} />
                    )
                })}

            </div>
        </article>
    )
}