# nuxt-lambda-example-01

## 参考

- [cloudformation がわかりやすい記事](https://qiita.com/ryurock/items/766154e0afb8fdb629e2)
- [今回超参考になった記事](https://qiilog.com/5b1ebb9abc5d62545e04)
- [今回超参考になったコード](https://github.com/kai-kou/nuxt-serverless)
- [この記事もとても参考になった](https://mya-ake.com/posts/nuxtjs-on-aws-lambda/)
- [Serverless Framework についてわかりやすく解説してくれてるサイト](https://dev.classmethod.jp/articles/easy-deploy-of-lambda-with-serverless-framework/)
- [最初この記事を参考にやってみたがうまくいかなかった。ただ、sls のデプロイまではうまくいった。](https://tech.spaceagent.co.jp/post/nuxt-with-serverless/)
- [lambda ではないけど面白かった記事(サーバーをちゃんと管理しないといけない時はこのやり方が理想かも)](https://note.com/ar_ojisan/n/n02334166cf57)
- [cloudfront だけのアクセスにするために yml で apiKey 発行方法](https://blog.potproject.net/2019/10/03/nuxt-serverless-tips)
- [api key を cloudfront に設定する方法](https://dev.classmethod.jp/articles/cache-api-gateway-by-cloudfront/)
- [Api Gateway に api key 認証をする方法](https://dev.classmethod.jp/articles/apigateway-apikey-auth/)

## 注意点

- cloudfront を使う場合は`nuxt.config.js`の router.base の設定をしないのと node で`/dev`にリダイレクトさせるなどはしない。
