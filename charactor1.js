private var cCon : CharacterController; 
private var velocity : Vector3;
private var animator : Animator;
public var speed : float;

function Start () {
    cCon = GetComponent.<CharacterController>();
    animator = GetComponent.<Animator>();
}

function Update () {
    if(cCon.isGrounded) {
        velocity = Vector3.zero;
        velocity.x = Input.GetAxis("Horizontal"); 
        velocity.y = 0; 
        velocity.z = Input.GetAxis("Vertical"); 
        transform.LookAt(transform.position + velocity);
        if (transform.position.y < -10){
            SceneManager.LoadScene("gameover");
        }
        
        if(velocity.magnitude > 0.1f) {
            animator.SetFloat("speed", velocity.magnitude);
        } else {
			animator.SetFloat("speed", 0);
    }
}
velocity.y += Physics.gravity.y * Time.deltaTime;
cCon.Move(velocity * speed * Time.deltaTime) 
