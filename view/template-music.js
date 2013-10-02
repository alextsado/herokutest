exports.build = function(title, pagetitle, content) {
 return ['<!doctype html>',
 '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
 '<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css" type="text/css"/>\n<link rel="stylesheet" href="assets/style.css" type="text/css"/>\n<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>\n<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>\n<script src="jsformusic.js" ></script>\n<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></head>',
 '<body><h1>{pagetitle}</h1>',
 '<div id="content">{content}</div>\n</body>\n</html>'
 ].join('\n')
 .replace(/{title}/g, title)
 .replace(/{pagetitle}/g, pagetitle)
 .replace(/{content}/g, content);
}



//img.fullscreen{max-height:100%; max-width:100%;}
