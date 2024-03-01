//タグ編集用のフォーム
const  editTagForm =  document.forms.editTagForm;

// タグ削除用フォーム
const deleteTagForm = document.forms.deleteTagForm;

// 削除の確認メッセージ
const deleteMessage = document.getElementById('deleteTagModalLabel');

// タグ編集用のモーダルを開く時の処理
document.getElementById('editTagModal').addEventListener('show.bs.modal',(event)=>{
let tagButton = event.relatedTarget;
let tagId = tagButton.dataset.tagId;
let tagName = tagButton.dataset.tagName;

editTagForm.action = `tags/${tagId}`;
editTagForm.name.value = tagName;
});

// タグの削除用モーダルを開く時の処理
document.getElementById('deleteTagModal').addEventListener('show.bs.modal', (event) =>{
    let deleteButton = event.relatedTarget;
    let tagId = deleteButton.dataset.tagId;
    let tagName = deleteButton.dataset.tagName;

    deleteTagForm.action = `tags/${tagId}`;
    deleteMessage.textContent = `「${tagName}」を削除してもよろしいですか？`
});
