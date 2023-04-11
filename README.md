
#### Başlarken

```
pnpx  create-next-app -e git@github.com:dukeofsoftware/next-full-starter.git
```

#### Projenin otomatik olarak her committe yayınlanması için ayarlar (CI/CD)

[Full döküman](https://voracious.dev/blog/how-to-deploy-to-vercel-with-github-actions)

```
pnpm add -D vercel
```

```
pnpx vercel login
```

```
pnpx vercel link
```
