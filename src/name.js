import sketch from 'sketch'
import Mock from 'mockjs'
const Random = Mock.Random

// export default function() {
//   const doc = sketch.getSelectedDocument() // 整个文件就是一个document
//   const selectedLayers = doc.selectedLayers // 获取图层
//   const selectedCount = selectedLayers.length // 获取图层个数

//   if (selectedCount === 0) {
//     sketch.UI.message('No layers are selected.')
//   } else {
//     sketch.UI.message(`${selectedCount} layers selected.`)
//   }
// }

// 将选中图层文本修改为随机数
export default function() {
  const doc = sketch.getSelectedDocument();
  const layers = doc.selectedLayers.layers;
  console.log(layers, 111);
  layers.forEach(layer => {
    const randName = Random.cname();
    if(layer.type === "ShapePath"){ // 图形
      layer.style.fills[0].color = Random.hex();  // 随机修改选中图层颜色
    }
    // layer.text = (Math.round(Math.random()*100)).toString(); // 将选中图层文本修改为随机数
    layer.text = randName; // 将选中图层文本修改为随机姓名
  });
}