

// lang changer

function changeLanguage(lang) {
    let body = document.body;
    let branchName = document.getElementById("branch-name");

    // تغيير الاتجاه بناءً على اللغة المختارة
    if (lang === "ar") {
        body.setAttribute("dir", "rtl");
        body.setAttribute("lang", "ar");
    } else {
        body.setAttribute("dir", "ltr");
        body.setAttribute("lang", lang);
    }

    // تغيير النصوص حسب اللغة
    branchName.textContent = branchName.getAttribute("data-" + lang);
}