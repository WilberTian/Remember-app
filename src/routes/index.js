import RememberContainer from '../containers/remember/RememberContainer';
import TaskContainer from '../containers/remember/task/TaskContainer';
import NoteContainer from '../containers/remember/note/NoteContainer';
import CategoryListContainer from '../containers/remember/category/CategoryListContainer';
import CategoryFormContainer from '../containers/remember/category/CategoryFormContainer';
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

const CategoryListRoute = {
    path: 'category',
    component: CategoryListContainer
};

const CategoryFormRoute = {
    path: 'category-form',
    component: CategoryFormContainer
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
        CategoryListRoute,
        CategoryFormRoute,
        TagRoute,
        notFountRoute
    ]
};

export default route;
