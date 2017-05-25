import { Modal } from 'antd-mobile';

const CategoryModal = (value) => {
    const prompt = Modal.prompt;

    return prompt('Category',
      'Input the category name',
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

export default CategoryModal;
