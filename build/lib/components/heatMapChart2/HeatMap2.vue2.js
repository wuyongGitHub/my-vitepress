"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),o=require("../../node_modules/three/build/three.module.js"),Q=["innerHTML"],Z=r.defineComponent({name:"JBHeatMap3DUV",__name:"HeatMap2",props:{data:{type:Array,default:()=>[]},width:{type:Number,default:600},height:{type:Number,default:500},baseSize:{type:Number,default:.1},maxHeight:{type:Number,default:3},enableOrbit:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#0d1b2a"},showGridHelper:{type:Boolean,default:!0},showAxesHelper:{type:Boolean,default:!0},gradientColors:{type:Array,default:()=>["#00008b","#00ffff","#ffff00","#ff0000"]},autoAnimate:{type:Boolean,default:!1},cameraPosition:{type:Object,default:()=>({x:8,y:8,z:8})}},setup(L,{expose:N}){const t=L,v=r.ref(null),x=r.ref({show:!1,x:0,y:0,content:""}),j=r.ref(t.autoAnimate);let h,p,s,z=null,H,F,M,I=null,a=null;const P=[];let g=0,m=0,C;r.onMounted(async()=>{X();const{OrbitControls:e}=await Promise.resolve().then(()=>require("../../node_modules/three/examples/jsm/controls/OrbitControls.js"));t.enableOrbit&&(z=new e(p,s.domElement),z.enableDamping=!0,z.dampingFactor=.05),k(),window.addEventListener("mousemove",$),window.addEventListener("resize",O),v.value&&v.value.addEventListener("mouseleave",()=>{x.value.show=!1})}),r.onUnmounted(()=>{I&&cancelAnimationFrame(I),window.removeEventListener("mousemove",$),window.removeEventListener("resize",O),a&&(a.geometry.dispose(),a.material.dispose()),C&&C.dispose(),s==null||s.dispose()});function q(){console.log("创建十段渐变着色器材质...");const e=[new o.Vector3(.0314,.1922,.3725),new o.Vector3(.2706,.5333,.7333),new o.Vector3(.5216,.7451,.8902),new o.Vector3(.7451,.8627,.9569),new o.Vector3(.8941,.8431,.8627),new o.Vector3(.9882,.8745,.8549),new o.Vector3(.9765,.7137,.6353),new o.Vector3(.9765,.4706,.3765),new o.Vector3(.7843,.0863,.149),new o.Vector3(.6863,0,.0588)],l=new o.ShaderMaterial({uniforms:{color0:{value:e[0]},color1:{value:e[1]},color2:{value:e[2]},color3:{value:e[3]},color4:{value:e[4]},color5:{value:e[5]},color6:{value:e[6]},color7:{value:e[7]},color8:{value:e[8]},color9:{value:e[9]},baseSize:{value:t.baseSize},maxHeight:{value:t.maxHeight}},vertexShader:`
            attribute float instanceValue;
            attribute vec3 instancePosition;
            attribute vec3 instanceScale;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            void main() {
                vValue = instanceValue;
                vPosition = position;

                // 计算顶点在柱体中的相对高度 (0到1)
                vHeight = (position.y + 0.5); // 立方体原本y范围是-0.5到0.5

                // 应用实例的缩放和位置
                vec3 transformed = position * instanceScale;
                transformed += instancePosition;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 color0;
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            uniform vec3 color4;
            uniform vec3 color5;
            uniform vec3 color6;
            uniform vec3 color7;
            uniform vec3 color8;
            uniform vec3 color9;

            varying float vValue;
            varying float vHeight;
            varying vec3 vPosition;

            vec3 getGradientColor(float value, float height) {
                // 根据数值大小决定使用多少段渐变
                if (value < 0.1) {
                    // 第一段：纯颜色
                    return color0;
                } else if (value < 0.2) {
                    // 第二段：2色渐变
                    return mix(color0, color1, height);
                } else if (value < 0.3) {
                    // 第三段：3色渐变
                    if (height < 0.5) {
                        return mix(color0, color1, height / 0.5);
                    } else {
                        return mix(color1, color2, (height - 0.5) / 0.5);
                    }
                } else if (value < 0.4) {
                    // 第四段：4色渐变
                    if (height < 0.33) {
                        return mix(color0, color1, height / 0.33);
                    } else if (height < 0.66) {
                        return mix(color1, color2, (height - 0.33) / 0.33);
                    } else {
                        return mix(color2, color3, (height - 0.66) / 0.34);
                    }
                } else if (value < 0.5) {
                    // 第五段：5色渐变
                    if (height < 0.25) {
                        return mix(color0, color1, height / 0.25);
                    } else if (height < 0.5) {
                        return mix(color1, color2, (height - 0.25) / 0.25);
                    } else if (height < 0.75) {
                        return mix(color2, color3, (height - 0.5) / 0.25);
                    } else {
                        return mix(color3, color4, (height - 0.75) / 0.25);
                    }
                } else if (value < 0.6) {
                    // 第六段：6色渐变
                    if (height < 0.2) {
                        return mix(color0, color1, height / 0.2);
                    } else if (height < 0.4) {
                        return mix(color1, color2, (height - 0.2) / 0.2);
                    } else if (height < 0.6) {
                        return mix(color2, color3, (height - 0.4) / 0.2);
                    } else if (height < 0.8) {
                        return mix(color3, color4, (height - 0.6) / 0.2);
                    } else {
                        return mix(color4, color5, (height - 0.8) / 0.2);
                    }
                } else if (value < 0.7) {
                    // 第七段：7色渐变
                    if (height < 0.1667) {
                        return mix(color0, color1, height / 0.1667);
                    } else if (height < 0.3333) {
                        return mix(color1, color2, (height - 0.1667) / 0.1667);
                    } else if (height < 0.5) {
                        return mix(color2, color3, (height - 0.3333) / 0.1667);
                    } else if (height < 0.6667) {
                        return mix(color3, color4, (height - 0.5) / 0.1667);
                    } else if (height < 0.8333) {
                        return mix(color4, color5, (height - 0.6667) / 0.1667);
                    } else {
                        return mix(color5, color6, (height - 0.8333) / 0.1667);
                    }
                } else if (value < 0.8) {
                    // 第八段：8色渐变
                    if (height < 0.1429) {
                        return mix(color0, color1, height / 0.1429);
                    } else if (height < 0.2857) {
                        return mix(color1, color2, (height - 0.1429) / 0.1429);
                    } else if (height < 0.4286) {
                        return mix(color2, color3, (height - 0.2857) / 0.1429);
                    } else if (height < 0.5714) {
                        return mix(color3, color4, (height - 0.4286) / 0.1429);
                    } else if (height < 0.7143) {
                        return mix(color4, color5, (height - 0.5714) / 0.1429);
                    } else if (height < 0.8571) {
                        return mix(color5, color6, (height - 0.7143) / 0.1429);
                    } else {
                        return mix(color6, color7, (height - 0.8571) / 0.1429);
                    }
                } else if (value < 0.9) {
                    // 第九段：9色渐变
                    if (height < 0.125) {
                        return mix(color0, color1, height / 0.125);
                    } else if (height < 0.25) {
                        return mix(color1, color2, (height - 0.125) / 0.125);
                    } else if (height < 0.375) {
                        return mix(color2, color3, (height - 0.25) / 0.125);
                    } else if (height < 0.5) {
                        return mix(color3, color4, (height - 0.375) / 0.125);
                    } else if (height < 0.625) {
                        return mix(color4, color5, (height - 0.5) / 0.125);
                    } else if (height < 0.75) {
                        return mix(color5, color6, (height - 0.625) / 0.125);
                    } else if (height < 0.875) {
                        return mix(color6, color7, (height - 0.75) / 0.125);
                    } else {
                        return mix(color7, color8, (height - 0.875) / 0.125);
                    }
                } else {
                    // 第十段：10色渐变
                    if (height < 0.1111) {
                        return mix(color0, color1, height / 0.1111);
                    } else if (height < 0.2222) {
                        return mix(color1, color2, (height - 0.1111) / 0.1111);
                    } else if (height < 0.3333) {
                        return mix(color2, color3, (height - 0.2222) / 0.1111);
                    } else if (height < 0.4444) {
                        return mix(color3, color4, (height - 0.3333) / 0.1111);
                    } else if (height < 0.5556) {
                        return mix(color4, color5, (height - 0.4444) / 0.1111);
                    } else if (height < 0.6667) {
                        return mix(color5, color6, (height - 0.5556) / 0.1111);
                    } else if (height < 0.7778) {
                        return mix(color6, color7, (height - 0.6667) / 0.1111);
                    } else if (height < 0.8889) {
                        return mix(color7, color8, (height - 0.7778) / 0.1111);
                    } else {
                        return mix(color8, color9, (height - 0.8889) / 0.1111);
                    }
                }
            }

            void main() {
                // 简单的光照效果
                vec3 lightDir = normalize(vec3(1.0, 2.0, 0.5));
                vec3 normal;

                // 计算法向量
                if (abs(vPosition.y) > 0.49) {
                    normal = vec3(0.0, sign(vPosition.y), 0.0);
                } else if (abs(vPosition.x) > 0.49) {
                    normal = vec3(sign(vPosition.x), 0.0, 0.0);
                } else {
                    normal = vec3(0.0, 0.0, sign(vPosition.z));
                }

                float diffuse = max(dot(normal, lightDir), 0.3);

                // 顶部更亮
                float topBrightness = vPosition.y > 0.4 ? 1.2 : 1.0;

                // 获取渐变颜色
                vec3 gradientColor = getGradientColor(vValue, vHeight);

                gl_FragColor = vec4(gradientColor * diffuse * topBrightness, 1.0);
            }
        `,transparent:!1});return console.log("十段渐变着色器材质创建完成"),l}function X(){console.log("初始化 Three.js...");const{backgroundColor:e,showGridHelper:l,showAxesHelper:n,cameraPosition:i,enableOrbit:u}=t;h=new o.Scene,h.background=new o.Color(e),console.log("场景创建完成，背景色:",e),p=new o.PerspectiveCamera(75,t.width/t.height,.1,1e3),p.position.set(i.x,i.y,i.z),console.log("相机创建完成，位置:",i),s=new o.WebGLRenderer({antialias:!0,powerPreference:"high-performance"}),s.setSize(t.width,t.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),console.log("渲染器创建完成，尺寸:",t.width,"x",t.height),v.value&&(v.value.innerHTML="",v.value.appendChild(s.domElement),console.log("渲染器DOM添加到容器"));const y=new o.AmbientLight(16777215,.8);h.add(y);const V=new o.DirectionalLight(16777215,.8);V.position.set(5,10,5),h.add(V),console.log("光源设置完成"),H=new o.Group,h.add(H),console.log("热力图组创建完成"),F=new o.Raycaster,M=new o.Vector2,D(),console.log("Three.js 初始化完成")}function Y(){return new o.BoxGeometry(1,1,1,1,8,1)}function D(){var R;console.log("开始创建热力图..."),a&&(H.remove(a),a.geometry.dispose(),a.material.dispose(),a=null,console.log("清理旧的热力图实例")),P.length=0;let e=t.data;Array.isArray(e)&&e.length>0&&e.every(c=>Array.isArray(c)&&c.length>0)||(console.log("使用默认测试数据"),e=[[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12],[5,7,9,11,13]]),g=e.length,m=((R=e[0])==null?void 0:R.length)||0,console.log(`网格尺寸: ${g} x ${m}`,"数据:",e);let n=1/0,i=-1/0;for(let c=0;c<g;c++){const A=e[c];if(Array.isArray(A))for(let f=0;f<m;f++){const w=A[f];typeof w=="number"&&(w<n&&(n=w),w>i&&(i=w))}}n===1/0&&(n=0),i===-1/0&&(i=1),n===i&&(i=n+1),console.log(`数据范围: ${n} - ${i}`),C=q();const u=Y(),y=g*m,V=new Float32Array(y),B=new Float32Array(y*3),G=new Float32Array(y*3);let d=0;for(let c=0;c<g;c++){const A=e[c];if(Array.isArray(A))for(let f=0;f<m;f++){const w=typeof A[f]=="number"?A[f]:0,_=(w-n)/(i-n),T=.1+_*t.maxHeight;V[d]=_;const J=(c-(g-1)/2)*t.baseSize,W=(f-(m-1)/2)*t.baseSize,K=T/2;B[d*3]=J,B[d*3+1]=K,B[d*3+2]=W,G[d*3]=t.baseSize,G[d*3+1]=T,G[d*3+2]=t.baseSize,P[d]={value:w,x:c,z:f,normalizedValue:_},d++}}console.log(`创建 ${y} 个实例`),u.setAttribute("instanceValue",new o.InstancedBufferAttribute(V,1)),u.setAttribute("instancePosition",new o.InstancedBufferAttribute(B,3)),u.setAttribute("instanceScale",new o.InstancedBufferAttribute(G,3)),a=new o.InstancedMesh(u,C,y),H.add(a),U(),console.log("热力图创建完成")}let b=null,S=null;function U(){b&&(h.remove(b),b=null),S&&(h.remove(S),S=null);const{showGridHelper:e,showAxesHelper:l}=t;if(e){const n=Math.max(g,m)*t.baseSize*1.5,i=Math.max(g,m);b=new o.GridHelper(n,i,16777215,8947848),b.position.y=-.01,h.add(b)}if(l){const n=Math.max(g,m)*t.baseSize*.8;S=new o.AxesHelper(n),h.add(S)}}function k(){I=requestAnimationFrame(k),z&&z.update(),s.render(h,p)}let E=null;function $(e){if(!v.value||!a)return;const l=v.value.getBoundingClientRect();if(e.clientX<l.left||e.clientX>l.right||e.clientY<l.top||e.clientY<l.bottom){x.value.show=!1;return}E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{M.x=(e.clientX-l.left)/l.width*2-1,M.y=-((e.clientY-l.top)/l.height)*2+1,F.setFromCamera(M,p);const n=F.intersectObject(a);if(n.length>0){const i=n[0].instanceId;if(i!==void 0&&P[i]){const u=P[i];x.value={show:!0,x:e.clientX-l.left+10,y:e.clientY-l.top-30,content:`数值: ${u.value.toFixed(2)}<br>位置: (${u.x}, ${u.z})<br>高度: ${(u.normalizedValue*100).toFixed(1)}%`}}}else x.value.show=!1})}function O(){!p||!s||(p.aspect=t.width/t.height,p.updateProjectionMatrix(),s.setSize(t.width,t.height))}return N({refresh:D,toggleAnimation:()=>j.value=!j.value,updateData:e=>{D()}}),(e,l)=>(r.openBlock(),r.createElementBlock("div",{class:"heatmap-wrapper",style:r.normalizeStyle({width:L.width+"px",height:L.height+"px"})},[r.unref(x).show?(r.openBlock(),r.createElementBlock("div",{key:0,class:"tooltip",style:r.normalizeStyle({left:r.unref(x).x+"px",top:r.unref(x).y+"px"}),innerHTML:r.unref(x).content},null,12,Q)):r.createCommentVNode("",!0),r.createElementVNode("div",{ref_key:"containerRef",ref:v,class:"three-container"},null,512)],4))}});exports.default=Z;
