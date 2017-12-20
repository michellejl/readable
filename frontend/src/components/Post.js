import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'
import PostHeader from './PostHeader'

class Post extends Component {
    render() {
        return (
            <div>
                <PostHeader />
                <div className={'post-summary'} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi consectetur consequuntur culpa dignissimos doloremque facilis illo inventore minima mollitia natus placeat praesentium quae quam ratione, rem soluta veniam.
                </div>
                <Button text={'Details'}/>
                <Button edit text={'Edit'}/>
                <Button delete text={'Delete'}/>
            </div>
        );
    }
}

export default Post;