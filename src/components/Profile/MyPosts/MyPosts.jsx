import React from 'react';
import s from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

let addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field name='newPostText' component={Textarea} validate={[required, maxLength10]} placeholder='Post message' />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(addNewPostForm)

const MyPosts = React.memo(props => {
  let postsElements =
    [...props.posts]
      .reverse()
      .map(postEl => <Post key={postEl.id} id={postEl.id} message={postEl.message} kolvLike={postEl.kolvLike} />);
 
  let onAddPost = (values) => {
    props.addPost(values.newPostText);

  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

export default MyPosts;