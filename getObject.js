var itemCountText:UI.Text;
private var itemCount : int = 7;
private var itemData : GameObject[]
        = new GameObject[itemCount];
private var flgData : boolean[]
        = new boolean [itemCount];
private var gameFlg : boolean = true;

function Start () {
    setupItem();
}

function Update () {
    if (!gameFlg) return;
    checkItemCount();
    checkEnd();
}

function OnCollisionEnter (obj : Collision) {
    if (!gameFlg) return;
    if (obj.gameObject.name == "Terrain")
        return;
    checkItems(obj.gameObject);
}

    
function setupItem(){
    for (var i = 0;i < itemCount;i++){
            itemData[i] = GameObject.Find("item" + i);
            flgData[i] = false;
    }
}

function checkItemCount(){
    var count = 0;
    for (var i = 0;i < itemCount;i++){
        if (flgData[i]) count++;
    }
    itemCountText.text = "ITEM:" + count;
}

function checkItems(obj : GameObject){
    for (var i = 0;i <itemCount;i++){ 
        if (obj.name == ("item" + i)){
            flgData[i] = true;
            obj.GetComponent.<Renderer>().enabled = false;
            (obj.gameObject.GetComponent("Halo")
            
                as Behaviour).enabled = false;
        }
    }
}

function checkEnd(){
    if (transform.position.y < -10){
        SceneManager.LoadScene("gameover");
    }
    for (var i = 0;i < itemCount;i++){
        if (!flgData[i]) return;
    }
    gameEnd(true);
}

function gameEnd(flg : boolean){
    gameFlg = false;
    var msg = GameObject.Find("msg");
    if (flg){
        SceneManager.LoadScene("Ending");
    } else {
        SceneManager.LoadScene("gameover");
    }
}
