window.onload = function() {
    let d = new Date();
    let date = [
        d.getFullYear(),
        ('0' + (d.getMonth() + 1)).slice(-2),
        ('0' + d.getDate()).slice(-2)
    ];

    const dp = date[0].toString().slice(3) + date[1].slice(1) + date[2].slice(1);

    document.getElementById("s1").innerHTML = dp;
    document.getElementById("s2").innerHTML = dp;
    document.getElementById("s3").innerHTML = dp;
    document.getElementById("s4").innerHTML = dp;
};