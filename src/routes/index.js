import RememberContainer from '../containers/remember/RememberContainer';
import TaskContainer from '../containers/remember/task/TaskContainer';
import NoteContainer from '../containers/remember/note/NoteContainer';
import CategoryContainer from '../containers/remember/category/CategoryContainer';
import TagContainer from '../containers/remember/tag/TagContainer';
import NotFound from './NotFound';

const TaskRoute = {
    path: 'task',
    component: TaskContainer
};

const NoteRoute = {
    path: 'note',
    component: NoteContainer
};

const CategoryRoute = {
    path: 'category',
    component: CategoryContainer
};

const TagRoute = {
    path: 'tag',
    component: TagContainer,
};

const notFountRoute = {
    path: '*',
    component: NotFound,
};

const route = {
    path: '/',
    component: RememberContainer,
    indexRoute: {
        component: TaskContainer,
    },
    childRoutes: [
        TaskRoute,
        NoteRoute,
        CategoryRoute,
        TagRoute,
        notFountRoute
    ]
};

export default route;
