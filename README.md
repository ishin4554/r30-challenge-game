# 從 Front-End Game 看第一次開發

這個遊戲原本是計畫中第二次複習週的挑戰遊戲，大概是課程進行到 45 天左右的時候我先行完成了複習，老師問我要不要試試看開發第二個挑戰遊戲，當下真的是瘋狂開心到二話不說就答應了 XDDD。

一來是自己很喜歡第一次的 HTTP Games，二來是我對學習體驗設計這件事很有興趣，三來是程式學習以來，對自己沒什麼自信，覺得學了很多卻不知道能不能承擔一個開發責任，這樣弱弱的自己被給予了一次機會，無疑是一劑強心針，很認真的衝刺了這個專案。

原訂的時程是第十週上線就可以了，但看到到 14 ％ 超前的同學，甚至有同學已經交了第九週作業，內心還是默默的定下了一週半的死線。整個開發過程中，特別感謝老師提供主軸題目跟給了非常多的建議，還有一些協助我測試的碩班同學，而我則是第一次體驗會被釋出的完整的開發小專案。

## 第一版
一開始收到老師的題目，我先列了文案跟關卡需求在一份 Excel 檔案裡面，並初步跟老師討論自己的實作方式，確定有沒有出入。

接著就先根據每關的通關條件，先做出基本 prototype : 
1. 主體的打字機視覺效果，這時還是使用 `typed.js` 來實踐，一但打完該行的字字就會消失
2. 用 php 作為後端語言來接收 string query 根據正確與否回傳不同的 html 
3. 每一關 token 的隱藏方式實作，有的需要特殊的 css 技巧

這個階段老師給了很多互動上的建議，例如：文字應該要能保留、快轉的功能等等，此時自己才發現，嗚喔喔喔自己體驗設計的經驗在開發的時候都丟進了水裡！！

## 第二版
以前玩 HTTP Games 的時候就覺得類似 RPG 的感覺可以挑戰以前曾經的 MUD 風格，所以第二版的實踐的時候就開始進行視覺風格的實踐，這次大部分的功能也都已經出來了，但有一些文字上敘述上的 bug 跟 css 的 RWD 問題：

1. 針對打字機的效果 typed.js 已經不敷使用，所以自己寫了一個 function 來跑打字機的效果，並加入快轉、跳過等等的功能
2. OOP 重構，大量重複的 function 很難維護，嘗試使用 OOP 將文字與打字機效果變成一個物件，但這一次遇到 `setTimeout` 的 `this` 指向問題，所以補看了 JS201 課程來了解 this 的意義。

到這邊，所有管理方法等等這種產品流程觀念都丟進水裡了，這邊開始意識到一個人做跟一個團隊做，方法應該要大調整（絕對不是一個人把所有團隊的工作量連文件做完，可具體怎麼做更好，還要更多磨練才會知道），也開始慢慢意識到 Test 的重要性，花太多時間在測試上很容易在設計上妥協。

## 第三版
這次大多數時間都在測試以及進行 php 的重構，因為測試的過程中改了一點點要到每一關改真是太沒有效率了。

1. 新增兩個關卡 `Hoisting`, `SQL` 想題目的過程很好玩，最後因為題目先天的限制沒有放入，但自己為了出 Hoisting 的題目第一次自己翻了 ECMAScript 多看了很多資料。
2. 大量地使用 `include_once()` 並用 `template` 降低維護成本。
2. `Flexbox Overflow`: 這裡是第一次面對設計與開發的妥協，有點像是警訊 XD 雖然知道控制列不動比較好，但為了修這個 bug 最後放棄了。 

最後還是有一些小 bug，大多可能是自己知道但最後稍微妥協的部分，看到老師給建議的時候覺得真的很不好意思，所以開始正視自己妥協細節的問題，決定投入時間研究自動化測試，減少測試壓力讓自己更專注在修細節上。

## 第四版
參考自 [Front End Roadmap](https://github.com/goodjack/developer-roadmap-chinese) 研究起 [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file) 想要做一個自動化測試，讓我可以跑過每一關的流程。

1. Cypress 的文件寫得很好懂，用起來像是第二週上的 `Jest` + 爬蟲的感覺。
2. 誤刪：人生永遠的痛 RRRRRRR 弄了一整天的東西