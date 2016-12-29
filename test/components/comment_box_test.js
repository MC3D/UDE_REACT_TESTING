import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  describe('component layout', () => {
    it('has the correct class', () =>{
      expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
      expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
      expect(component.find('button')).to.exist;
    });
  });

  describe('component behavior', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows user input', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    });

    it('clears input on submit', () => {

    });
  });


});
