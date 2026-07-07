# GitHub / Vercel よくあるエラー対応

## No Output Directory named "public"

原因：
VercelのOutput Directory設定と、実際のビルド出力先が合っていません。

確認：
- Viteなら通常は `dist`
- 静的HTMLを自前で `public` に出しているなら `public`

対応：
- VercelのProject SettingsでOutput Directoryを確認
- `npm run build` をローカルで実行
- 生成されたフォルダ名に合わせる

## 画像が表示されない

原因：
パス指定が本番環境でずれていることが多いです。

確認：
- `public/images/sample.png` に置いた画像は `/images/sample.png`
- GitHub Pagesの場合は `./images/sample.png` が必要なケースもある
- 大文字小文字が一致しているか

## GitHubにpushできない

確認：
- `git status`
- `git remote -v`
- `git branch`
- GitHub側に同名ブランチがあるか

よく使うコマンド：

```bash
git add .
git commit -m "Update LP"
git push origin main
```

## Vercelで古い表示のまま

確認：
- 最新コミットがGitHubにpushされているか
- VercelのDeploymentsで最新ビルドが成功しているか
- ブラウザキャッシュを消す

## npm run build が失敗する

まず見るところ：
- エラーの一番下
- importしているファイル名
- 未使用ではなく未定義エラー
- 画像パス
- package.jsonのscripts

AIに聞くときのプロンプト：

```text
以下は npm run build のエラーログです。
原因を特定し、修正すべきファイルとコードを教えてください。
必要なら修正案も出してください。

ログ:
{エラーログ}
```
