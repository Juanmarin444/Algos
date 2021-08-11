process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    console.log("My Data: ", data)
    input_stdin += data;
});

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

input_stdin_array = [4,3,6,10,9];
main();

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){

	this.insert=function(head,data){

        let newNode = new Node(data);

        if (head === null) {
            head = newNode;
            return head;
        } else {
            let current = head
            while(current != null) {

                if (current.next === null) {
                    current.next = newNode;
                    break;
                }
                current = current.next
            }
            return head;
        }

    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    console.log(typeof(head));
    // mylist.display(head);
    console.log(head);
}
