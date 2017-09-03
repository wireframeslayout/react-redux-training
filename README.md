React + Redux + Laravelを使ってTodoアプリを作ろう

1. Rest APIを作っていく
  ・ Laravelを使ってAPIを構築していく
    ・Databaseにtodosというテーブルを作る
    ・Model　Todoを作成
    ・tinkerを使ってモデルの操作を実行
    ・Controllerとルーティングを行う
      ・リストを取得する
      ・Todoを新規登録する
      ・Todoを処理済みにする
      ・Todoを削除する
  - Rest API
    ・GET /api/todos Todoリストを取得する
    ・POST /api/todos 新しいTodoを作成する
    ・PATCH /api/todos/{id} 指定したidのデータを更新する
    ・DELETE /api/todos/{id} 指定したidのデータを削除する
    ・POST /api/todos/{id}/done 指定したidのデータのステータスをトグルする

2. Reactを使ってフロントを構築

3. Reduxを使って、ステートの管理を行う
