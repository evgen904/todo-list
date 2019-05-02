<template>
  <div id="app">
    <div class="site-wrap">
      <div class="left">
        <form>
          <h4>Добавление задачи</h4>
          <div>
            <input type="text" placeholder="Название">
          </div>
          <div>
            <textarea cols="30" rows="5" placeholder="Описание"></textarea>
          </div>
          <div class="btn">
            <button class="green" type="button">Важно</button>
            <button class="yellow" type="button">Срочно</button>
            <button class="red" type="button">Оч. важно</button>
          </div>
          <div>
            <button type="button">Добавить задачу</button>
          </div>
        </form>
        <form>
          <h4>Изменения задачи</h4>
          <div>
            <input type="text" placeholder="Название">
          </div>
          <div>
            <textarea cols="30" rows="5" placeholder="Описание"></textarea>
          </div>
          <div class="btn">
            <button class="green" type="button">Важно</button>
            <button class="yellow active" type="button">Срочно</button>
            <button class="red" type="button">Оч. важно</button>
          </div>
          <div>
            <button type="button">Изменить задачу</button>
          </div>
          <div class="close"></div>
        </form>
      </div>
      <div class="right">
        <div class="tabs-head">
          <button class="active">Текущие задачи</button>
          <button>Выполненные задачи</button>
        </div>
        <div class="tabs-body">
          <ul>
            <li>
              <div class="status green"></div>
              <div class="desc">
                <div class="title">
                  <input type="checkbox">
                  <div>
                    Уникальная задача
                  </div>
                </div>
                <div class="note">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae blanditiis consequatur doloremque dolores, ea eaque eius et facere fuga in, libero modi nihil officiis omnis quaerat quam recusandae saepe sequi sint tenetur totam veritatis vitae, voluptas! Hic, reprehenderit?
                </div>
              </div>
              <div class="edit">
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="128" height="128" viewBox="0 0 128 128"><path fill="#1756e8" d="M8,112V16c0-4.414,3.594-8,8-8h80c4.414,0,8,3.586,8,8v47.031l8-8V16c0-8.836-7.164-16-16-16H16C7.164,0,0,7.164,0,16v96
			c0,8.836,7.164,16,16,16h44v-8H16C11.594,120,8,116.414,8,112z M88,24H24v8h64V24z M88,40H24v8h64V40z M88,56H24v8h64V56z M24,80
			h32v-8H24V80z M125.656,72L120,66.344c-1.563-1.563-3.609-2.344-5.656-2.344s-4.094,0.781-5.656,2.344l-34.344,34.344
			C72.781,102.25,68,108.293,68,110.34L64,128l17.656-4c0,0,8.094-4.781,9.656-6.344l34.344-34.344
			C128.781,80.188,128.781,75.121,125.656,72z M88.492,114.82c-0.453,0.43-2.02,1.488-3.934,2.707l-10.363-10.363
			c1.063-1.457,2.246-2.922,2.977-3.648l25.859-25.859l11.313,11.313L88.492,114.82z"/></svg>
                </button>
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="17" height="17" viewBox="0 0 17 17"><path fill="#f54528" d="M15.110,3.305 L15.110,14.639 C15.110,15.940 14.051,16.999 12.749,16.999 L4.249,16.999 C2.948,16.999 1.888,15.940 1.888,14.639 L1.888,3.305 L-0.000,3.305 L-0.000,2.361 L5.195,2.361 L5.195,1.416 C5.195,0.636 5.829,0.000 6.611,0.000 L10.389,0.000 C11.170,0.000 11.805,0.636 11.805,1.416 L11.805,2.361 L17.000,2.361 L17.000,3.305 L15.110,3.305 ZM10.861,1.416 C10.861,1.156 10.649,0.944 10.389,0.944 L6.611,0.944 C6.350,0.944 6.139,1.156 6.139,1.416 L6.139,2.361 L10.861,2.361 L10.861,1.416 ZM14.166,3.305 L11.333,3.305 L5.666,3.305 L2.833,3.305 L2.833,14.639 C2.833,15.420 3.468,16.055 4.249,16.055 L12.749,16.055 C13.531,16.055 14.166,15.420 14.166,14.639 L14.166,3.305 ZM10.861,5.194 L11.805,5.194 L11.805,14.166 L10.861,14.166 L10.861,5.194 ZM8.027,5.194 L8.971,5.194 L8.971,14.166 L8.027,14.166 L8.027,5.194 ZM5.195,5.194 L6.139,5.194 L6.139,14.166 L5.195,14.166 L5.195,5.194 Z"></path></svg>
                </button>
              </div>
            </li>
            <li>
              <div class="status yellow"></div>
              <div class="desc">
                <div class="title">
                  <input type="checkbox">
                  <div>
                    Уникальная задача
                  </div>
                </div>
                <div class="note">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae blanditiis consequatur doloremque dolores, ea eaque eius et facere fuga in, libero modi nihil officiis omnis quaerat quam recusandae saepe sequi sint tenetur totam veritatis vitae, voluptas! Hic, reprehenderit?
                </div>
              </div>
              <div class="edit">
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="128" height="128" viewBox="0 0 128 128"><path fill="#1756e8" d="M8,112V16c0-4.414,3.594-8,8-8h80c4.414,0,8,3.586,8,8v47.031l8-8V16c0-8.836-7.164-16-16-16H16C7.164,0,0,7.164,0,16v96
			c0,8.836,7.164,16,16,16h44v-8H16C11.594,120,8,116.414,8,112z M88,24H24v8h64V24z M88,40H24v8h64V40z M88,56H24v8h64V56z M24,80
			h32v-8H24V80z M125.656,72L120,66.344c-1.563-1.563-3.609-2.344-5.656-2.344s-4.094,0.781-5.656,2.344l-34.344,34.344
			C72.781,102.25,68,108.293,68,110.34L64,128l17.656-4c0,0,8.094-4.781,9.656-6.344l34.344-34.344
			C128.781,80.188,128.781,75.121,125.656,72z M88.492,114.82c-0.453,0.43-2.02,1.488-3.934,2.707l-10.363-10.363
			c1.063-1.457,2.246-2.922,2.977-3.648l25.859-25.859l11.313,11.313L88.492,114.82z"/></svg>
                </button>
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="17" height="17" viewBox="0 0 17 17"><path fill="#f54528" d="M15.110,3.305 L15.110,14.639 C15.110,15.940 14.051,16.999 12.749,16.999 L4.249,16.999 C2.948,16.999 1.888,15.940 1.888,14.639 L1.888,3.305 L-0.000,3.305 L-0.000,2.361 L5.195,2.361 L5.195,1.416 C5.195,0.636 5.829,0.000 6.611,0.000 L10.389,0.000 C11.170,0.000 11.805,0.636 11.805,1.416 L11.805,2.361 L17.000,2.361 L17.000,3.305 L15.110,3.305 ZM10.861,1.416 C10.861,1.156 10.649,0.944 10.389,0.944 L6.611,0.944 C6.350,0.944 6.139,1.156 6.139,1.416 L6.139,2.361 L10.861,2.361 L10.861,1.416 ZM14.166,3.305 L11.333,3.305 L5.666,3.305 L2.833,3.305 L2.833,14.639 C2.833,15.420 3.468,16.055 4.249,16.055 L12.749,16.055 C13.531,16.055 14.166,15.420 14.166,14.639 L14.166,3.305 ZM10.861,5.194 L11.805,5.194 L11.805,14.166 L10.861,14.166 L10.861,5.194 ZM8.027,5.194 L8.971,5.194 L8.971,14.166 L8.027,14.166 L8.027,5.194 ZM5.195,5.194 L6.139,5.194 L6.139,14.166 L5.195,14.166 L5.195,5.194 Z"></path></svg>
                </button>
              </div>
            </li>
            <li>
              <div class="status red"></div>
              <div class="desc">
                <div class="title">
                  <input type="checkbox">
                  <div>
                    Уникальная задача
                  </div>
                </div>
                <div class="note">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae blanditiis consequatur doloremque dolores, ea eaque eius et facere fuga in, libero modi nihil officiis omnis quaerat quam recusandae saepe sequi sint tenetur totam veritatis vitae, voluptas! Hic, reprehenderit?
                </div>
              </div>
              <div class="edit">
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="128" height="128" viewBox="0 0 128 128"><path fill="#1756e8" d="M8,112V16c0-4.414,3.594-8,8-8h80c4.414,0,8,3.586,8,8v47.031l8-8V16c0-8.836-7.164-16-16-16H16C7.164,0,0,7.164,0,16v96
			c0,8.836,7.164,16,16,16h44v-8H16C11.594,120,8,116.414,8,112z M88,24H24v8h64V24z M88,40H24v8h64V40z M88,56H24v8h64V56z M24,80
			h32v-8H24V80z M125.656,72L120,66.344c-1.563-1.563-3.609-2.344-5.656-2.344s-4.094,0.781-5.656,2.344l-34.344,34.344
			C72.781,102.25,68,108.293,68,110.34L64,128l17.656-4c0,0,8.094-4.781,9.656-6.344l34.344-34.344
			C128.781,80.188,128.781,75.121,125.656,72z M88.492,114.82c-0.453,0.43-2.02,1.488-3.934,2.707l-10.363-10.363
			c1.063-1.457,2.246-2.922,2.977-3.648l25.859-25.859l11.313,11.313L88.492,114.82z"/></svg>
                </button>
                <button>
                  <svg preserveAspectRatio="xMidYMid" width="17" height="17" viewBox="0 0 17 17"><path fill="#f54528" d="M15.110,3.305 L15.110,14.639 C15.110,15.940 14.051,16.999 12.749,16.999 L4.249,16.999 C2.948,16.999 1.888,15.940 1.888,14.639 L1.888,3.305 L-0.000,3.305 L-0.000,2.361 L5.195,2.361 L5.195,1.416 C5.195,0.636 5.829,0.000 6.611,0.000 L10.389,0.000 C11.170,0.000 11.805,0.636 11.805,1.416 L11.805,2.361 L17.000,2.361 L17.000,3.305 L15.110,3.305 ZM10.861,1.416 C10.861,1.156 10.649,0.944 10.389,0.944 L6.611,0.944 C6.350,0.944 6.139,1.156 6.139,1.416 L6.139,2.361 L10.861,2.361 L10.861,1.416 ZM14.166,3.305 L11.333,3.305 L5.666,3.305 L2.833,3.305 L2.833,14.639 C2.833,15.420 3.468,16.055 4.249,16.055 L12.749,16.055 C13.531,16.055 14.166,15.420 14.166,14.639 L14.166,3.305 ZM10.861,5.194 L11.805,5.194 L11.805,14.166 L10.861,14.166 L10.861,5.194 ZM8.027,5.194 L8.971,5.194 L8.971,14.166 L8.027,14.166 L8.027,5.194 ZM5.195,5.194 L6.139,5.194 L6.139,14.166 L5.195,14.166 L5.195,5.194 Z"></path></svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  * {
    box-sizing: border-box;
  }
}

.site-wrap {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  .left {
    flex: 0 0 400px;
    form {
      padding: 14px;
      margin: 0 0 20px;
      border: 1px solid #ccc;
      position: relative;
      .close {
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 14px;
        width: 20px;
        height: 20px;
        &:after, &:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 10px;
          width: 2px;
          height: 18px;
          background: #000;
        }
        &:after {
          transform: rotate(45deg);
        }
        &:before {
          transform: rotate(-45deg);
        }
      }
      h4 {
        padding: 0;
        margin: 0 0 14px;
      }
      > div {
        margin-bottom: 10px;
        &.btn {
          display: flex;
        }
      }
      input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px 12px;
        margin: 0;
        outline-style: none;
        font-size: 14px;
        border: 1px solid #ccc;
      }
      button {
        cursor: pointer;
        padding: 10px 10px;
        margin: 0;
        display: block;
        width: 100%;
        text-align: center;
        background: #f0f0f0;
        border: 1px solid #f0f0f0;
        outline-style: none;
        font-size: 14px;
        color: #000000;
        position: relative;
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border: 2px solid rgba(0,0,0,0.2);
          opacity: 0;
        }
        &.green {
          color: #ffffff;
          background: #4cc350;
        }
        &.yellow {
          color: #ffffff;
          background: #e8da17;
        }
        &.red {
          color: #ffffff;
          background: #ff5252;
        }
        &.active {
          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
  .right {
    flex: auto;
    padding: 0 0 0 10px;
    .tabs-head {
      margin: 0 0 -1px;
      button {
        outline-style: none;
        cursor: pointer;
        padding: 12px 18px;
        margin: 0 -1px 0 0;
        border: 1px solid #ccc;
        font-size: 14px;
        background: #fff;
        &.active {
          background: #f0f0f0;
        }
      }
    }
    .tabs-body {
      border: 1px solid #ccc;
      font-size: 14px;
      padding: 14px;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        > li {
          border: 1px solid #f0f0f0;
          display: flex;
          padding: 0;
          margin: 0 0 10px;
          justify-content: space-between;
          .status {
            flex: 0 0 10px;
            background: #ccc;
            &.green {
              background: #4cc350;
            }
            &.yellow {
              background: #e8da17;
            }
            &.red {
              background: #ff5252;
            }
          }
          .desc {
            flex: auto;
            padding: 14px 20px;
            .title {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 10px;
              input[type="checkbox"] {
                padding: 0;
                margin: 0;
              }
              > div {
                font-size: 14px;
                padding: 0 0 0 10px;
              }
            }
            .note {
              font-size: 13px;
            }
          }
          .edit {
            flex: 0 0 40px;
            padding: 14px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            button {
              cursor: pointer;
              padding: 0;
              margin: 0;
              background: transparent;
              border: none;
              outline-style: none;
              text-align: center;
              svg {
                max-width: 100%;
                width: 17px;
                height: 17px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
