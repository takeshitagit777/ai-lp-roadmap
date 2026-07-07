import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  FileText,
  Github,
  Globe2,
  MailPlus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards
} from 'lucide-react';
import './styles.css';

const modules = [
  ['01', '売れるLPの型を理解する', '画像1枚から、構成・見出し・CTA・セクション設計へ分解する。'],
  ['02', 'AIに制作指示を出す', 'Codex / ChatGPTへ渡すプロンプト、修正指示、品質チェックを覚える。'],
  ['03', 'GitHubへ公開準備する', 'リポジトリ作成、README、画像管理、コミットの基本を押さえる。'],
  ['04', 'Vercelで公開する', 'Build command、Output directory、失敗時の直し方まで実例で確認。'],
  ['05', 'ポートフォリオ化する', '実サイトのスクリーンショットを撮り、制作実績カードに載せる。'],
  ['06', '営業リストを作る', '狙う業種、既存サイトの弱点、提案しやすい相手をAIで洗い出す。'],
  ['07', '営業文をAIで作る', 'メール、フォーム、DM、追客文を相手別に自動生成する。'],
  ['08', '月15万円を目指す運用', '5万円案件×3件、3万円案件×5件の現実的な動き方に落とす。']
];

const bonuses = [
  'LP制作プロンプト集 30本',
  '業種別LP構成テンプレート 12種',
  'Vercelエラー対応チェックリスト',
  '営業メール・DMテンプレート 20本',
  '初回ヒアリングシート',
  'ポートフォリオ掲載テンプレート'
];

const steps = [
  ['画像', '参考LP画像や手書きラフを用意する'],
  ['制作', 'AIに実装させ、PC/スマホで確認する'],
  ['公開', 'GitHubとVercelでURLを作る'],
  ['掲載', '実績カードにスクショを載せる'],
  ['営業', 'AIでリストと提案文を作る']
];

const faqs = [
  ['未経験でもできますか？', 'HTML/CSS/Reactの細かい暗記より、AIへの指示と確認の流れを重視します。完全未経験でも進められるよう、手順とプロンプトを用意しています。'],
  ['月15万円は保証ですか？', '保証ではありません。営業量、提案内容、制作スピード、地域や業種によって結果は変わります。本教材は月15万円を目指すための実践手順です。'],
  ['何を売ればいいですか？', '小規模事業者向けのLP、予約導線改善、既存サイトのファーストビュー改善、ポートフォリオ用デモ制作などを想定しています。'],
  ['Vercelで詰まったら？', 'Output Directory、Build Command、画像パス、GitHub連携など、よくある失敗パターンをチェックリスト化しています。'],
  ['返金はありますか？', 'デジタル商品の性質上、購入後の返金は原則不可です。販売ページに内容物と注意事項を明記してください。']
];

function App() {
  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand">
          <span><Bot size={24} /></span>
          <strong>AI LP Roadmap</strong>
        </a>
        <nav>
          <a href="#curriculum">内容</a>
          <a href="#bonus">特典</a>
          <a href="#price">価格</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#buy">購入する</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI LP制作を仕事にする実践キット</p>
            <h1>
              画像1枚からLPを作り、<br />
              公開して、営業するまで。
            </h1>
            <p className="lead">
              Codex / ChatGPTを使って、LP画像からサイト実装、GitHub、Vercel公開、ポートフォリオ掲載、営業文作成までを一気通貫で進めるロードマップです。
            </p>
            <div className="hero-actions">
              <a className="primary" href="#buy">20,000円で始める<ArrowRight size={18} /></a>
              <a className="secondary" href="#curriculum">内容を見る</a>
            </div>
            <div className="proof-row">
              <span><CheckCircle2 size={16} />実例つき</span>
              <span><CheckCircle2 size={16} />営業テンプレつき</span>
              <span><CheckCircle2 size={16} />Vercel公開対応</span>
            </div>
          </div>
          <div className="hero-board" aria-label="教材の内容イメージ">
            <div className="window">
              <div className="dots"><i></i><i></i><i></i></div>
              <div className="code-line wide"></div>
              <div className="code-line"></div>
              <div className="preview-card">
                <div>
                  <strong>LP Demo</strong>
                  <small>from image to deploy</small>
                </div>
                <Rocket />
              </div>
              <div className="task-list">
                <span><Code2 size={16} />Reactで実装</span>
                <span><Github size={16} />GitHubへpush</span>
                <span><Globe2 size={16} />Vercelで公開</span>
                <span><MailPlus size={16} />営業文を生成</span>
              </div>
            </div>
            <div className="income-card">
              <small>Target Plan</small>
              <strong>月15万円を目指す</strong>
              <p>5万円LP × 3件 / 3万円改善 × 5件</p>
            </div>
          </div>
        </section>

        <section className="problem section">
          <div className="section-title">
            <p className="eyebrow">WHY NOW</p>
            <h2>AIで作れる人は増えた。<br />でも、公開して営業できる人はまだ少ない。</h2>
          </div>
          <div className="problem-grid">
            <article><FileText /><h3>作って終わる</h3><p>URL公開や実績化まで進まず、営業に使える形にならない。</p></article>
            <article><Globe2 /><h3>公開で詰まる</h3><p>Vercelの設定、画像パス、ビルドエラーで止まりやすい。</p></article>
            <article><Target /><h3>営業ができない</h3><p>誰に、何を、どう提案すればいいかが曖昧なままになる。</p></article>
          </div>
        </section>

        <section className="flow section">
          <div className="section-title center">
            <p className="eyebrow">ROADMAP</p>
            <h2>この順番で進めます</h2>
          </div>
          <div className="step-row">
            {steps.map(([title, text], index) => (
              <article key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="curriculum section" id="curriculum">
          <div className="section-title">
            <p className="eyebrow">CURRICULUM</p>
            <h2>教材内容</h2>
            <p>教材は「見るだけ」ではなく、1つずつ作業して実績を増やすための構成です。</p>
          </div>
          <div className="module-list">
            {modules.map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bonus section" id="bonus">
          <div className="section-title center">
            <p className="eyebrow">BONUS</p>
            <h2>すぐ使える特典テンプレート</h2>
          </div>
          <div className="bonus-grid">
            {bonuses.map((item) => (
              <article key={item}><Download /><span>{item}</span></article>
            ))}
          </div>
        </section>

        <section className="price section" id="price">
          <div className="price-card" id="buy">
            <div>
              <p className="eyebrow">PRICE</p>
              <h2>AI LP制作ロードマップ</h2>
              <p>LP制作から公開、ポートフォリオ掲載、営業までの実践キット。</p>
            </div>
            <div className="price-box">
              <small>買い切り</small>
              <strong>20,000円</strong>
              <a className="primary" href="mailto:takeshita.hiroki@gwx.co.jp?subject=AI%20LP%E5%88%B6%E4%BD%9C%E3%83%AD%E3%83%BC%E3%83%89%E3%83%9E%E3%83%83%E3%83%97%E8%B3%BC%E5%85%A5%E5%B8%8C%E6%9C%9B">購入希望メールを送る<ChevronRight size={18} /></a>
            </div>
          </div>
          <p className="notice">
            注意: 本教材は成果を保証するものではありません。収益はスキル、営業量、提案内容、市場状況によって変動します。販売時は特定商取引法に基づく表記、返金条件、提供内容、事業者情報を明記してください。
          </p>
        </section>

        <section className="faq section" id="faq">
          <div className="section-title center">
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="legal section">
          <ShieldCheck />
          <div>
            <h2>販売前に必ず整えるもの</h2>
            <p>特定商取引法に基づく表記、プライバシーポリシー、返金条件、問い合わせ先、教材の提供方法、決済後の案内文を準備してください。</p>
          </div>
        </section>
      </main>

      <footer>
        <Sparkles />
        <p>AI LP Roadmap</p>
        <small>AIでLP制作を仕事にする実践キット</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
