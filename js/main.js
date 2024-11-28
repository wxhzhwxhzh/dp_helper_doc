$( function() {
    $( "#menu" ).menu({
      items: "> :not(.ui-widget-header)"
    });
  } );



// 通用的加载并渲染 Markdown 文件的函数
function loadMarkdown(filePath, elementId) {
  console.log(`加载文件: ${filePath}`);
  
  // 加载 markdown 文件并渲染
  fetch(filePath)
      .then(response => response.text())
      .then(text => {
          const html = marked.parse(text); // 将 markdown 转换为 HTML
          document.getElementById(elementId).innerHTML = html;  // 插入到页面中
      })
      .catch(err => console.error(`Error loading markdown file (${filePath}):`, err));
}

// 加载高阶用法
loadMarkdown('../markdown2/高阶用法.md', 'gaojie');

// 加载基本用法
loadMarkdown('../markdown/基本用法.md', 'jiben');

// 加载
loadMarkdown('../markdown3/下载安装.md', 'anzhuang');
