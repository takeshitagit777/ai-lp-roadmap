import path from 'node:path';
import { fileURLToPath } from 'node:url';
import playwright from '../../Tagit/node_modules/playwright/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'note', 'images');
const { chromium } = playwright;

const theme = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    width: 1600px;
    height: 900px;
    font-family: "Noto Sans JP", "Yu Gothic", "Hiragino Sans", system-ui, sans-serif;
    color: #101418;
    background:
      radial-gradient(circle at 10% 8%, rgba(223,248,107,.55), transparent 25%),
      radial-gradient(circle at 90% 16%, rgba(15,138,99,.22), transparent 30%),
      linear-gradient(135deg, #fbfaf5 0%, #edf5ef 100%);
  }
  .frame {
    width: 1480px;
    height: 780px;
    margin: 60px;
    padding: 60px 64px;
    border-radius: 48px;
    background: rgba(255,255,255,.82);
    box-shadow: 0 34px 90px rgba(16,20,24,.14);
    position: relative;
    overflow: hidden;
  }
  .frame:after {
    content: "";
    position: absolute;
    right: -180px;
    bottom: -220px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(223,248,107,.75), transparent 68%);
  }
  .content { position: relative; z-index: 2; }
  .eyebrow {
    color: #0f8a63;
    font-weight: 900;
    letter-spacing: .14em;
    font-size: 25px;
    margin-bottom: 22px;
  }
  h1 {
    margin: 0;
    font-size: 86px;
    line-height: 1.12;
    letter-spacing: 0;
  }
  h2 {
    margin: 0 0 28px;
    font-size: 62px;
    line-height: 1.18;
    letter-spacing: 0;
  }
  h3 {
    margin: 0;
    font-size: 36px;
    line-height: 1.28;
  }
  p {
    color: #516171;
    font-size: 28px;
    line-height: 1.75;
    margin: 0;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 14px 26px;
    background: #101418;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    white-space: nowrap;
  }
  .pill.green { background: #0f8a63; }
  .pill.light { background: #dff86b; color: #101418; }
  .card {
    border: 1px solid rgba(16,20,24,.1);
    border-radius: 26px;
    background: rgba(255,255,255,.86);
    box-shadow: 0 18px 44px rgba(16,20,24,.08);
  }
  .dark-card {
    background: #101418;
    color: #fff;
    border: 1px solid rgba(255,255,255,.12);
  }
  .muted { color: #516171; }
  .green-text { color: #0f8a63; }
  .list {
    display: grid;
    gap: 16px;
    margin-top: 22px;
  }
  .list div {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 14px;
    align-items: center;
    font-size: 28px;
    font-weight: 800;
    line-height: 1.35;
  }
  .check {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: #dff86b;
    color: #101418;
    font-weight: 900;
  }
  .step-num {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    background: #dff86b;
    font-size: 28px;
    font-weight: 900;
  }
  .mock-browser {
    overflow: hidden;
    border-radius: 28px;
    border: 1px solid rgba(16,20,24,.12);
    background: #fff;
    box-shadow: 0 24px 60px rgba(16,20,24,.12);
  }
  .browser-bar {
    height: 58px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 22px;
    border-bottom: 1px solid rgba(16,20,24,.08);
    background: #f5f8f4;
  }
  .dot { width: 14px; height: 14px; border-radius: 50%; background: #d7ded7; }
  .code {
    font-family: "Consolas", "SFMono-Regular", monospace;
    font-size: 23px;
    line-height: 1.55;
    color: #dff86b;
    background: #101418;
    border-radius: 24px;
    padding: 28px;
    white-space: pre-wrap;
  }
`;

const tickList = (items) => `
  <div class="list">
    ${items.map((item) => `<div><span class="check">✓</span><span>${item}</span></div>`).join('')}
  </div>
`;

const flowCards = (items) => `
  <div style="display:grid;grid-template-columns:repeat(${items.length},1fr);gap:18px;margin-top:42px;">
    ${items.map((item, index) => `
      <div class="card" style="height:300px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;">
        <div class="step-num">${index + 1}</div>
        <h3>${item.title}</h3>
        <p style="font-size:22px;">${item.text}</p>
      </div>
    `).join('')}
  </div>
`;

const assets = [
  {
    name: '00-cover.png',
    html: `
      <div class="frame">
        <div class="content" style="max-width: 1030px;">
          <div class="eyebrow">AI LP制作 実践教材</div>
          <h1>画像1枚からLPを作り、<br>公開して、営業するまで。</h1>
          <p style="max-width: 900px; margin-top: 30px;">
            Codex / ChatGPTで制作、GitHub、Vercel、ポートフォリオ掲載、営業文作成までを1本につなげるロードマップ。
          </p>
          <div style="display:flex;gap:18px;align-items:center;margin-top:38px;">
            <span class="pill">20,000円</span>
            <span class="pill green">月15万円を目指す実践キット</span>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '01-why-this-sells.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">WHY IT SELLS</div>
          <h2>売れるのは「サイトを作れる人」ではなく<br>公開して提案までできる人</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:34px;">
            <div class="card" style="padding:38px;">
              <h3>弱い状態</h3>
              ${tickList(['デザインだけ作って終わる', '公開URLがない', '営業で見せる実績がない', '提案文が毎回ゼロから'])}
            </div>
            <div class="card" style="padding:38px;border:3px solid #0f8a63;">
              <h3 class="green-text">強い状態</h3>
              ${tickList(['公開URLがある', 'スクショを実績化している', '改善案つきで営業できる', '納品までの型がある'])}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '02-full-roadmap.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">FULL ROADMAP</div>
          <h2>画像 → LP → 公開 → 実績 → 営業</h2>
          ${flowCards([
            { title: '画像を選ぶ', text: '参考LPやデザイン画像を1枚用意する' },
            { title: 'AIで分解', text: '構成、色、CTA、必要セクションを整理' },
            { title: 'LPを作る', text: 'Codex / ChatGPTで実装して確認' },
            { title: '公開する', text: 'GitHubとVercelでURL化する' },
            { title: '営業する', text: '実績として見せて改善案を送る' }
          ])}
        </div>
      </div>
    `
  },
  {
    name: '03-reference-to-requirements.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">STEP 1</div>
          <h2>参考画像から、LPの設計図を作る</h2>
          <div style="display:grid;grid-template-columns:.95fr 1.05fr;gap:32px;margin-top:34px;">
            <div class="mock-browser">
              <div class="browser-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:12px;color:#607080;font-size:20px;">reference-image.png</span></div>
              <div style="padding:34px;background:linear-gradient(135deg,#eaf8f6,#fff);height:470px;">
                <div style="height:170px;border-radius:30px;background:#0f8a63;color:#fff;padding:34px;">
                  <h3>痛みを、ここで終わらせる。</h3>
                  <p style="color:#e9fff8;font-size:23px;">信頼感のある整体院LPの例</p>
                </div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px;">
                  <div class="card" style="height:120px;"></div>
                  <div class="card" style="height:120px;"></div>
                  <div class="card" style="height:120px;"></div>
                </div>
              </div>
            </div>
            <div class="card" style="padding:36px;">
              <h3>AIに抜き出させること</h3>
              ${tickList(['ターゲット', 'ファーストビュー構成', '配色と余白', 'CTAの位置', '必要セクション', 'スマホで大事な導線'])}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '04-prompt-example.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">PROMPT</div>
          <h2>最初に投げるプロンプト例</h2>
          <div class="code" style="margin-top:28px;height:500px;">あなたはLP制作ディレクターです。
添付した参考画像をもとに、同じ雰囲気のLPを作るための要件を整理してください。

出力してほしい内容:
- ターゲット
- デザインコンセプト
- ファーストビュー構成
- 必要セクション
- CTA設計
- スマホ表示の注意点

丸パクリではなく、別案件として自然に使える構成にしてください。</div>
        </div>
      </div>
    `
  },
  {
    name: '05-codex-build.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">STEP 2</div>
          <h2>Codexに「作業完了」まで任せる</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:36px;">
            <div class="card" style="padding:38px;">
              <h3>依頼に入れる条件</h3>
              ${tickList(['Vite + React', 'PC / スマホ対応', '画像配置', 'CTA設計', 'npm run build成功', '公開前チェック'])}
            </div>
            <div class="code" style="height:430px;">目的:
整体院向けの予約につながるLP

必要セクション:
ヘッダー / FV / 悩み / 強み
流れ / 料金 / 口コミ / FAQ / CTA

最後に:
npm run buildを実行し、
エラーがあれば修正してください。</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '06-github-flow.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">STEP 3</div>
          <h2>GitHubに上げて、制作物を資産化する</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:34px;">
            <div class="code" style="height:430px;">git init
git add .
git commit -m "Create LP"
git branch -M main
git remote add origin {repo-url}
git push -u origin main</div>
            <div class="card" style="padding:38px;">
              <h3>ここで見ること</h3>
              ${tickList(['最新コードがpush済み', 'READMEがある', '画像も含まれている', 'build scriptがある', 'URLを共有できる状態'])}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '07-vercel-flow.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">STEP 4</div>
          <h2>Vercelで公開URLを作る</h2>
          <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:30px;margin-top:34px;">
            <div class="mock-browser">
              <div class="browser-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:12px;color:#607080;font-size:20px;">vercel.com/new</span></div>
              <div style="padding:36px;height:440px;">
                <div class="card" style="padding:28px;margin-bottom:18px;"><h3>Framework Preset: Vite</h3></div>
                <div class="card" style="padding:28px;margin-bottom:18px;"><h3>Build Command: npm run build</h3></div>
                <div class="card" style="padding:28px;"><h3>Output Directory: dist</h3></div>
              </div>
            </div>
            <div class="card" style="padding:38px;">
              <h3>失敗したら見る場所</h3>
              ${tickList(['Deploy Logs', 'Output Directory', '画像パス', 'package.json', 'GitHubの最新commit'])}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '08-portfolio-proof.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">STEP 5</div>
          <h2>公開したら、すぐ実績カードにする</h2>
          <div style="display:grid;grid-template-columns:.9fr 1.1fr;gap:32px;margin-top:34px;">
            <div class="card" style="padding:24px;">
              <div style="height:250px;border-radius:22px;background:linear-gradient(135deg,#10382f,#f6fff1);padding:30px;color:#fff;">
                <h3>ハル整骨院 LP</h3>
                <p style="color:#e8fff7;font-size:24px;">ファーストビューのスクリーンショット</p>
              </div>
              <h3 style="margin-top:24px;">制作実績カード</h3>
              <p>クリック前とクリック後の印象を一致させる</p>
            </div>
            <div class="card" style="padding:38px;">
              <h3>載せる情報</h3>
              ${tickList(['サイト名', '公開URL', 'ファーストビュー画像', '制作意図', '使用技術', '改善した導線'])}
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '09-income-model.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">INCOME MODEL</div>
          <h2>月15万円を目指す現実的な組み方</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:42px;">
            ${[
              ['5万円 × 3件', 'LP制作を月3件'],
              ['3万円 × 5件', '既存サイト改善を月5件'],
              ['10万円 + 小案件', 'LP1件と改善案件']
            ].map(([title, text]) => `
              <div class="card" style="height:260px;padding:36px;display:flex;flex-direction:column;justify-content:space-between;">
                <h3 style="font-size:48px;color:#0f8a63;">${title}</h3>
                <p>${text}</p>
              </div>
            `).join('')}
          </div>
          <p style="font-size:24px;margin-top:28px;">※成果保証ではありません。営業量、提案内容、実績、市場状況で結果は変わります。</p>
        </div>
      </div>
    `
  },
  {
    name: '10-sales-list.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">SALES LIST</div>
          <h2>営業先は「困っていそうな理由」で選ぶ</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px;">
            ${[
              ['予約導線が弱い', '整体院 / 美容室 / 士業'],
              ['スマホで読みにくい', '店舗 / 工務店 / スクール'],
              ['良さが伝わらない', '小規模BtoB / 採用ページ']
            ].map(([title, text]) => `
              <div class="card" style="height:300px;padding:34px;display:flex;flex-direction:column;justify-content:space-between;">
                <h3 style="font-size:38px;">${title}</h3>
                <p>${text}</p>
              </div>
            `).join('')}
          </div>
          <p style="font-size:24px;margin-top:28px;">売り込みより先に、相手のページを見て「直す理由」を1つ見つけます。</p>
        </div>
      </div>
    `
  },
  {
    name: '11-sales-message.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">SALES MESSAGE</div>
          <h2>営業文は、この4ブロックで作る</h2>
          ${flowCards([
            { title: '良い点', text: 'まず相手のサイトの良さを1つ伝える' },
            { title: '改善点', text: 'スマホ導線など、直せる点を1つだけ出す' },
            { title: '無料ラフ', text: 'いきなり売らず改善イメージを提案' },
            { title: '低い返信', text: '一言返信でよい形にして負担を下げる' }
          ])}
        </div>
      </div>
    `
  },
  {
    name: '12-client-flow.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">CLIENT FLOW</div>
          <h2>受注後に迷わない<br>ヒアリングから納品まで</h2>
          <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:34px;margin-top:32px;">
            <div class="card" style="padding:38px;">
              ${['目的を聞く', '素材を集める', '初稿を作る', '修正をまとめる', '公開URLを納品'].map((t, i) => `
                <div style="display:grid;grid-template-columns:68px 1fr;gap:18px;align-items:center;margin-bottom:18px;">
                  <div class="step-num" style="width:58px;height:58px;">${i + 1}</div>
                  <h3>${t}</h3>
                </div>
              `).join('')}
            </div>
            <div class="card dark-card" style="padding:40px;">
              <h3 style="font-size:42px;">最初に決める</h3>
              <p style="color:#d9e5df;margin-top:24px;">ページ数、修正回数、公開方法、追加料金。ここが曖昧だと案件が荒れやすくなります。</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '13-delivery-checklist.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">DELIVERY CHECK</div>
          <h2>納品前に見るチェックリスト</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px;">
            ${['PCで崩れていない', 'スマホで読める', 'CTAがすぐ見つかる', '画像が表示される', '料金と流れが分かる', 'FAQがある', 'npm run build成功', 'Vercelの最新デプロイ成功'].map((t) => `
              <div class="card" style="padding:22px 28px;font-size:29px;font-weight:900;">✓ ${t}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '14-30day-plan.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">30 DAY PLAN</div>
          <h2>公開して終わりにしない<br>30日実行ロードマップ</h2>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:34px;">
            ${[
              ['Week 1', 'デモLP作成', '画像から構成を抜き出し、公開URLまで作る'],
              ['Week 2', '実績化', 'ポートフォリオ掲載、Before / Afterを整理'],
              ['Week 3', '営業開始', '候補30件を集め、改善案つきで連絡'],
              ['Week 4', '提案改善', '返信内容から文面とオファーを磨く']
            ].map(([week, title, text]) => `
              <div class="card" style="height:320px;padding:32px;display:flex;flex-direction:column;gap:22px;">
                <span class="pill green" style="align-self:flex-start;">${week}</span>
                <h3>${title}</h3>
                <p style="font-size:24px;">${text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '15-common-errors.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">ERROR GUIDE</div>
          <h2>Vercelで詰まったら、まずここを見る</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:34px;">
            <div class="card" style="padding:36px;">
              <h3>よくある原因</h3>
              ${tickList(['Output Directory違い', '画像パスのズレ', 'build scriptなし', 'GitHub未push', 'base pathのズレ'])}
            </div>
            <div class="code" style="height:430px;">確認コマンド:
npm run build
git status
git log --oneline -3

Viteの基本:
Build Command: npm run build
Output Directory: dist</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '16-bonus-stack.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">BONUS</div>
          <h2>購入者に渡すテンプレート一式</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;">
            ${['LP制作プロンプト集', '営業リストCSV', '顧客ヒアリングシート', '納品・修正文面', 'Vercelエラー対応', '30日営業計画'].map((t) => `
              <div class="card" style="padding:34px;height:150px;display:flex;align-items:center;font-size:31px;font-weight:900;">${t}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '17-action-sheet.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">ACTION SHEET</div>
          <h2>今日やることは、この5つだけ</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px;">
            <div class="card" style="padding:38px;">
              ${tickList(['業種を1つ選ぶ', '参考画像を1枚保存', 'AIに構成を出させる', 'LPを公開する', '10件だけ営業する'])}
            </div>
            <div class="card dark-card" style="padding:42px;">
              <h3 style="font-size:44px;">完璧より公開</h3>
              <p style="color:#d9e5df;margin-top:24px;">最初の目的は、売れるデザインを当てることではなく、見せられる実績を作って営業を始めることです。</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });

for (const asset of assets) {
  await page.setContent(`<!doctype html><html><head><meta charset="UTF-8"><style>${theme}</style></head><body>${asset.html}</body></html>`);
  await page.screenshot({ path: path.join(outputDir, asset.name), fullPage: false });
  console.log(`note/images/${asset.name}`);
}

await browser.close();
