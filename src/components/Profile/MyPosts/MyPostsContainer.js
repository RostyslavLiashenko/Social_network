import {addPostCreator, toggleLikesCreator} from '../../../Redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userPosts: state.profilePage.userPosts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newText) => {
            dispatch(addPostCreator(newText))
        },
        toggleLikes: (postId) => {
            dispatch(toggleLikesCreator(postId))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;