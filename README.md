need to be clear about the pic:

<img src= "./src/assets/images/dependency injection(i).png" />

comand for creat file

```http

mkdir -p src/modules/userModules src/modules/postModules src/modules/categoryModules src/common/pipes && \
touch src/modules/userModules/user.controller.ts src/modules/userModules/user.schema.ts src/modules/userModules/user.service.ts src/modules/userModules/user.module.ts && \
touch src/modules/postModules/post.controller.ts src/modules/postModules/post.schema.ts src/modules/postModules/post.service.ts src/modules/postModules/post.module.ts && \
touch src/modules/categoryModules/category.controller.ts src/modules/categoryModules/category.schema.ts src/modules/categoryModules/category.service.ts src/modules/categoryModules/category.module.ts && \
touch src/app.module.ts src/common/pipes/trim.pipe.ts

```


```
`mongodb+srv://asifaowadud:sof6vxfRNfUEvdCg@cluster0.gjcwx8p.mongodb.net/nestjs_tutorial?retryWrites=true&w=majority&appName=Cluster0`

```

```
Users: GET /users, GET /users/:id, POST /users
Posts: GET /posts, GET /posts/:id, POST /posts
Categories: GET /categories, GET /categories/:id, POST /categories

```