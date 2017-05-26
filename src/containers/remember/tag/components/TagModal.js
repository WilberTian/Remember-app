import { Modal } from 'antd-mobile';

const TagModal = (value) => {
    const prompt = Modal.prompt;

    return prompt('Tag',
      'Input the tag name',
        [
            { text: 'Cancel' },
            {
                text: 'Ok',
                onPress: (updated) => {
                    console.log(updated);
                }
            }
        ],
      'plain-text',
      value
    );
};

export default TagModal;
