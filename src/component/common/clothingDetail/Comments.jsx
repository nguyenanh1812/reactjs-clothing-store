import React from "react";

export default function Comments() {
  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <div className="header_comment">
            <div className="row">
              <div className="col-md-6 text-start">
                <span className="count_comment">264 Comments</span>
              </div>
              <div className="col-md-6 text-end">
                <span className="sort_title">Sort by </span>
                <select className="sort_by">
                  <option>Top</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="body_comment">
            <div className="row">
              <div className="avatar_comment col-md-1">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                  alt="avatar"
                />
              </div>
              <div className="box_comment col-md-11">
                <textarea
                  className="commentar"
                  placeholder="Add a comment..."
                ></textarea>
                <div className="box_post">
                  <div className="d-flex justify-content-start align-items-center" style={{gap: '8px'}}>
                    <input type="checkbox" />
                    <label for="post_fb">Also post on Facebook</label>
                  </div>
                  <div className="d-flex justify-content-end align-items-center" style={{gap: '5px'}}>
                    <span>
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                        alt="avatar"
                      />
                      <i className="fa fa-caret-down"></i>
                    </span>
                    <button onclick="submit_comment()" type="button" value="1">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="col-md-12">
                <li className="box_result row">
                  <div className="avatar_comment col-md-1">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="result_comment col-md-11">
                    <h4>Anh NT</h4>
                    <p>
                      ??o t???t ?????y l???n sau mua ti???p!
                    </p>
                    <div className="tools_comment">
                      <div className="like"  >
                        Like
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <div className="replay"  >
                        Reply
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <i className="fa fa-thumbs-o-up"></i>
                      <span className="count">3</span>
                      <span aria-hidden="true"> ?? </span>
                      <span>26m</span>
                    </div>
                    <ul className="child_replay">
                      <li className="box_reply row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="result_comment col-md-11">
                          <h4>Tu???n Anh ??i ch??i</h4>
                          <p>
                            T???t c??i g?? ?????t qu?? m?? x???u :)
                          </p>
                          <div className="tools_comment">
                            <div className="like"  >
                              Like
                            </div>
                            <span aria-hidden="true"> ?? </span>
                            <div className="replay"  >
                              Reply
                            </div>
                            <span aria-hidden="true"> ?? </span>
                            <i className="fa fa-thumbs-o-up"></i>{" "}
                            <span className="count">7</span>
                            <span aria-hidden="true"> ?? </span>
                            <span>5m</span>
                          </div>
                          <ul className="child_replay"></ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="box_result row">
                  <div className="avatar_comment col-md-1">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="result_comment col-md-11">
                    <h4>Tu???n Anh ??i ??n</h4>
                    <p>??ang c?? 2 voucher ??p v??o gi?? r??? qu?? n??!</p>
                    <div className="tools_comment">
                      <div className="like"  >
                        Like
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <div className="replay"  >
                        Reply
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <i className="fa fa-thumbs-o-up"></i>{" "}
                      <span className="count">11</span>
                      <span aria-hidden="true"> ?? </span>
                      <span>9h</span>
                    </div>
                    <ul className="child_replay">
                      <li className="box_reply row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="result_comment col-md-11">
                          <h4>TAnh zui z???</h4>
                          <p>
                            N???u ???????c th?? cho c??i voucher ??i!!
                          </p>
                          <div className="tools_comment">
                            <div className="like"  >
                              Like
                            </div>
                            <span aria-hidden="true"> ?? </span>
                            <div className="replay"  >
                              Reply
                            </div>
                            <span aria-hidden="true"> ?? </span>
                            <i className="fa fa-thumbs-o-up"></i>{" "}
                            <span className="count">1</span>
                            <span aria-hidden="true"> ?? </span>
                            <span>44m</span>
                          </div>
                          <ul className="child_replay"></ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="box_result row">
                  <div className="avatar_comment col-md-1">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div className="result_comment col-md-11">
                    <h4>Sad boy Anh nt</h4>
                    <p>
                    i really hate it. T???!!!
                    </p>
                    <div className="tools_comment">
                      <div className="like"  >
                        Like
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <div className="replay" >
                        Reply
                      </div>
                      <span aria-hidden="true"> ?? </span>
                      <i className="fa fa-thumbs-o-up"></i>{" "}
                      <span className="count">4</span>
                      <span aria-hidden="true"> ?? </span>
                      <span>16h</span>
                    </div>
                    <ul className="child_replay"></ul>
                  </div>
                </li>
              </ul>
              <button className="show_more" type="button">
                Load 10 more comments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
