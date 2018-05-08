import Page from '@/components/Page';const Celur_about = () => import('%/about.md');const Celur_blog_one = () => import('%/blog/_posts/one.md');const Celur_blog_two = () => import('%/blog/_posts/two.md');const Celur_blog_about_author = () => import('%/blog/about/author.md');const Celur_blog = () => import('%/blog/index.md');const Celur_ = () => import('%/index.md');export default [
            {
                path: '/about',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_about,
                }]
            },
            
            {
                path: '/blog/one',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_blog_one,
                }]
            },
            
            {
                path: '/blog/two',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_blog_two,
                }]
            },
            
            {
                path: '/blog/about/author',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_blog_about_author,
                }]
            },
            
            {
                path: '/blog',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_blog,
                }]
            },
            
            {
                path: '/',
                component: Page,
                children: [{
                        path: '',
                        component: Celur_,
                }]
            },
            ];