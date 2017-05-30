import { Modal } from 'antd-mobile';

const ConfirmModal = (
    title = '删除',
    content = '确定删除么?',
    confirmCb = () => { console.log('cancel'); },
    cancelCb = () => { console.log('ok'); }) => {
    const alert = Modal.alert;

    return alert(title, content, [
        {
            text: '取消',
            onPress: cancelCb
        },
        {
            text: '确定',
            onPress: confirmCb,
            style: {
                fontWeight: 'bold'
            }
        }
    ]);
};

export default ConfirmModal;
