---
name: "weekly-deep-peek"
description: "每周五深度一瞥：广度拓展+思维燃料+哲学/历史随笔，双视角批判"
---

# 深度一瞥 Skill

## Overview
每周五 20:00 为兴逸推送一期「深度一瞥」，由 Vim 全权策展，聚焦拓宽认知广度。内容不固定，每周不同领域，含双视角批判结构。

## Push Schedule
- **每周五** 20:00 Asia/Shanghai
- 走 cron job + `agentTurn`，通过 announce delivery 推送到 QQ
- 独立子会话运行，不影响关闭电脑
- **推送内容改为 GitHub Pages 链接 + 一句话简介**，不再在 QQ 内发送全文
  - 格式示例：`🔗 第003期已发布 — [本期主题] → https://seng-jik.github.io/week-deep-peek.github.io/`

## 内容结构（每一期三块）

### 1️⃣ 广度拓展（主菜）
选一个兴逸完全不了解或很少接触的领域，写浓缩入门漫游。需涵盖：
- 这个领域是干什么的
- 为什么值得关注
- 关键人物/事件/概念
- 与已有兴趣（游戏开发、AI、编程、音乐作曲）的交叉点

每周主题必须完全不一样，至少连续4周不重复大类。

### 2️⃣ 思维燃料（配菜）
一个有趣的概念/悖论/思维框架，让人看完会去思考。
例如：Goodhart's Law、Chesterton's Fence、费米悖论的各种解法、技术债 vs 人类债 等。

### 3️⃣ 哲学/历史随笔（甜点）
一篇有意思的哲学/历史随笔或反思性文章。可以是：
- 一个历史事件的独特视角
- 一个哲学思想的有趣解读
- 一篇值得读的长文推荐

## 写作规则（核心）

1. **每板块正文百来字** — 内容丰满，不是一行带过
2. **给一对，不给一个** — 每个观点配上批判者、对立学派、或后继修正版。读者摄入的不是单一结论，而是一个张力结构
3. **追根溯源** — 每个观点说明来由、后续社会反响、后继者的延伸/批评，避免片面
4. **广度优先** — 不深入技术细节
5. **有意思 > 有深度** — 这是一瞥，不是论文
6. **能挂钩已有兴趣更好** — 游戏、开发、AI、音乐、VRChat 等
7. **自然有性格** — 中文正常写作，不要AI腔

## 选材来源（持续扩展）
- Hacker News / 技术社区
- 学术圈新发现
- LessWrong、Astral Codex Ten 等思想类博客
- 设计/艺术/建筑
- 小众文化/亚文化
- 社科/心理学/经济学经典概念
- 历史冷门事件
- 科学史上有趣的转折点
- 技术哲学的思考

## 输出规约
每期输出后，将全文以 Markdown 保存到 `D:\Vim\深度一瞥\`，文件名格式：
```
{序号}-{主题}-{日期}.md
```
例如：`001-试刊号-2026-06-27.md`

### 推送通知内容（不在 QQ 内发送全文）
完成 GitHub 同步后，通过 cron 的 announce delivery 向兴逸发送简短通知，格式：

```
🔗 第{序号}期 · {主题} · {日期}
一句话简介：{一句话概括本期亮点}
直达：https://seng-jik.github.io/week-deep-peek.github.io/
```

### GitHub 同步（必做）
每期输出保存后，需同步推送到 GitHub 仓库：

```bash
cd D:\Vim\深度一瞥
git add -A
git commit -m "第{序号}期 - {主题}"
git pull --rebase origin main
git push origin main
```

GitHub 仓库: `git@github.com:Seng-Jik/Weekly-Deep-Peek.git`（SSH）

### GitHub Pages 网站维护
- GitHub Pages 地址: https://seng-jik.github.io/week-deep-peek.github.io/
- 网站使用 MDwiki 0.7.0 渲染 Markdown 文件
- 每期新文章发布后，**必须同步更新以下文件**：
  - `D:\Vim\深度一瞥\index.md` — 在目录最顶部插入新一期（最新在上，最旧在下），每期标题带上 `[📖 阅读全文](文件名.md)` 链接
  - `D:\Vim\深度一瞥\index.md` — 首页「最新一期直达链接」也要更新为最新刊

## Tool Constraints
- 使用 allowed tools: read, edit, write, web_search, web_fetch, cron, sessions_list, sessions_send, memory_search, memory_get
- 推送使用 cron job delivery 的 announce 模式

## Maintenance
- 兴逸或审稿人反馈时更新 SKILL.md 和 MEMORY.md
- 使用 `cron update` 调整 job
