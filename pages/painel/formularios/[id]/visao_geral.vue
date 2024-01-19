<template>
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Summary-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">Tasks Summary</h3>
            <div class="fs-6 fw-semibold text-gray-400">24 Overdue Tasks</div>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <a href="#" class="btn btn-light btn-sm">View Tasks</a>
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div class="card-body p-9 pt-5">
          <!--begin::Wrapper-->
          <div class="d-flex flex-wrap">
            <!--begin::Chart-->
            <div class="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
              <div class="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                <span class="fs-2qx fw-bold">237</span>
                <span class="fs-6 fw-semibold text-gray-400">Total Tasks</span>
              </div>
              <canvas id="project_overview_chart" width="175" height="175" style="display: block; box-sizing: border-box; height: 175px; width: 175px;"></canvas>
            </div>
            <!--end::Chart-->
            <!--begin::Labels-->
            <div class="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
              <!--begin::Label-->
              <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                <div class="bullet bg-primary me-3"></div>
                <div class="text-gray-400">Active</div>
                <div class="ms-auto fw-bold text-gray-700">30</div>
              </div>
              <!--end::Label-->
              <!--begin::Label-->
              <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                <div class="bullet bg-success me-3"></div>
                <div class="text-gray-400">Completed</div>
                <div class="ms-auto fw-bold text-gray-700">45</div>
              </div>
              <!--end::Label-->
              <!--begin::Label-->
              <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                <div class="bullet bg-danger me-3"></div>
                <div class="text-gray-400">Overdue</div>
                <div class="ms-auto fw-bold text-gray-700">0</div>
              </div>
              <!--end::Label-->
              <!--begin::Label-->
              <div class="d-flex fs-6 fw-semibold align-items-center">
                <div class="bullet bg-gray-300 me-3"></div>
                <div class="text-gray-400">Yet to start</div>
                <div class="ms-auto fw-bold text-gray-700">25</div>
              </div>
              <!--end::Label-->
            </div>
            <!--end::Labels-->
          </div>
          <!--end::Wrapper-->
          <!--begin::Notice-->
          <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-semibold">
                <div class="fs-6 text-gray-700">
                  <a href="#" class="fw-bold me-1">Invite New .NET Collaborators</a>to create great outstanding business to business .jsp modutr class scripts</div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Summary-->
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Graph-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">Tasks Over Time</h3>
            <!--begin::Labels-->
            <div class="fs-6 d-flex text-gray-400 fs-6 fw-semibold">
              <!--begin::Label-->
              <div class="d-flex align-items-center me-6">
													<span class="menu-bullet d-flex align-items-center me-2">
														<span class="bullet bg-success"></span>
													</span>Complete</div>
              <!--end::Label-->
              <!--begin::Label-->
              <div class="d-flex align-items-center">
													<span class="menu-bullet d-flex align-items-center me-2">
														<span class="bullet bg-primary"></span>
													</span>Incomplete</div>
              <!--end::Label-->
            </div>
            <!--end::Labels-->
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <!--begin::Select-->
            <select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-solid form-select-sm fw-bold w-100px select2-hidden-accessible" data-select2-id="select2-data-10-w7y2" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
              <option value="1">2020 Q1</option>
              <option value="2">2020 Q2</option>
              <option value="3" selected="selected" data-select2-id="select2-data-12-p3pw">2020 Q3</option>
              <option value="4">2020 Q4</option>
            </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-0lpv" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid form-select-sm fw-bold w-100px" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-status-zj-container" aria-controls="select2-status-zj-container"><span class="select2-selection__rendered" id="select2-status-zj-container" role="textbox" aria-readonly="true" title="2020 Q3">2020 Q3</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            <!--end::Select-->
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div class="card-body pt-10 pb-0 px-5">
          <!--begin::Chart-->
          <div id="kt_project_overview_graph" class="card-rounded-bottom" style="height: 300px; min-height: 315px;"><div id="apexchartswg4bvolc" class="apexcharts-canvas apexchartswg4bvolc apexcharts-theme-light" style="width: 583px; height: 300px;"><svg id="SvgjsSvg1006" width="583" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable hovering-zoom" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1008" class="apexcharts-inner apexcharts-graphical" transform="translate(42.109375, 30)"><defs id="SvgjsDefs1007"><clipPath id="gridRectMaskwg4bvolc"><rect id="SvgjsRect1012" width="525.6875" height="233.73000000000002" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskwg4bvolc"></clipPath><clipPath id="nonForecastMaskwg4bvolc"></clipPath><clipPath id="gridRectMarkerMaskwg4bvolc"><rect id="SvgjsRect1013" width="522.6875" height="234.73000000000002" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1025" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1026" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1028" font-family="Helvetica, Arial, sans-serif" x="0" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1029">Feb</tspan><title>Feb</title></text><text id="SvgjsText1031" font-family="Helvetica, Arial, sans-serif" x="86.44791666666666" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1032">Mar</tspan><title>Mar</title></text><text id="SvgjsText1034" font-family="Helvetica, Arial, sans-serif" x="172.89583333333334" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1035">Apr</tspan><title>Apr</title></text><text id="SvgjsText1037" font-family="Helvetica, Arial, sans-serif" x="259.34375000000006" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1038">May</tspan><title>May</title></text><text id="SvgjsText1040" font-family="Helvetica, Arial, sans-serif" x="345.79166666666674" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1041">Jun</tspan><title>Jun</title></text><text id="SvgjsText1043" font-family="Helvetica, Arial, sans-serif" x="432.2395833333334" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1044">Jul</tspan><title>Jul</title></text><text id="SvgjsText1046" font-family="Helvetica, Arial, sans-serif" x="518.6875" y="259.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1047">Aug</tspan><title>Aug</title></text></g></g><g id="SvgjsG1068" class="apexcharts-grid"><g id="SvgjsG1069" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1071" x1="0" y1="0" x2="518.6875" y2="0" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1072" x1="0" y1="46.146" x2="518.6875" y2="46.146" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1073" x1="0" y1="92.292" x2="518.6875" y2="92.292" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1074" x1="0" y1="138.438" x2="518.6875" y2="138.438" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1075" x1="0" y1="184.584" x2="518.6875" y2="184.584" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1076" x1="0" y1="230.73000000000002" x2="518.6875" y2="230.73000000000002" stroke="#eff2f5" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1070" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1078" x1="0" y1="230.73000000000002" x2="518.6875" y2="230.73000000000002" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1077" x1="0" y1="1" x2="0" y2="230.73000000000002" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1014" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1015" class="apexcharts-series" seriesName="Incomplete" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1018" d="M0 230.73000000000002L0 92.29199999999997C30.256770833333334 92.29199999999997 56.19114583333334 92.29199999999997 86.44791666666667 92.29199999999997C116.7046875 92.29199999999997 142.63906250000002 26.369142857142833 172.89583333333334 26.369142857142833C203.15260416666666 26.369142857142833 229.08697916666668 26.369142857142833 259.34375 26.369142857142833C289.60052083333335 26.369142857142833 315.53489583333334 59.33057142857143 345.7916666666667 59.33057142857143C376.0484375 59.33057142857143 401.9828125 59.33057142857143 432.2395833333333 59.33057142857143C462.49635416666666 59.33057142857143 488.43072916666665 59.33057142857143 518.6875 59.33057142857143C518.6875 59.33057142857143 518.6875 59.33057142857143 518.6875 230.73000000000002M518.6875 59.33057142857143C518.6875 59.33057142857143 518.6875 59.33057142857143 518.6875 59.33057142857143 " fill="rgba(241,250,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskwg4bvolc)" pathTo="M 0 230.73000000000002L 0 92.29199999999997C 30.256770833333334 92.29199999999997 56.19114583333334 92.29199999999997 86.44791666666667 92.29199999999997C 116.7046875 92.29199999999997 142.63906250000002 26.369142857142833 172.89583333333334 26.369142857142833C 203.15260416666666 26.369142857142833 229.08697916666668 26.369142857142833 259.34375 26.369142857142833C 289.60052083333335 26.369142857142833 315.53489583333334 59.33057142857143 345.7916666666667 59.33057142857143C 376.0484375 59.33057142857143 401.9828125 59.33057142857143 432.2395833333333 59.33057142857143C 462.49635416666666 59.33057142857143 488.43072916666665 59.33057142857143 518.6875 59.33057142857143C 518.6875 59.33057142857143 518.6875 59.33057142857143 518.6875 230.73000000000002M 518.6875 59.33057142857143z" pathFrom="M -1 553.7520000000001L -1 553.7520000000001L 86.44791666666667 553.7520000000001L 172.89583333333334 553.7520000000001L 259.34375 553.7520000000001L 345.7916666666667 553.7520000000001L 432.2395833333333 553.7520000000001L 518.6875 553.7520000000001"></path><path id="SvgjsPath1019" d="M0 92.29199999999997C30.256770833333334 92.29199999999997 56.19114583333334 92.29199999999997 86.44791666666667 92.29199999999997C116.7046875 92.29199999999997 142.63906250000002 26.369142857142833 172.89583333333334 26.369142857142833C203.15260416666666 26.369142857142833 229.08697916666668 26.369142857142833 259.34375 26.369142857142833C289.60052083333335 26.369142857142833 315.53489583333334 59.33057142857143 345.7916666666667 59.33057142857143C376.0484375 59.33057142857143 401.9828125 59.33057142857143 432.2395833333333 59.33057142857143C462.49635416666666 59.33057142857143 488.43072916666665 59.33057142857143 518.6875 59.33057142857143C518.6875 59.33057142857143 518.6875 59.33057142857143 518.6875 59.33057142857143 " fill="none" fill-opacity="1" stroke="#009ef7" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskwg4bvolc)" pathTo="M 0 92.29199999999997C 30.256770833333334 92.29199999999997 56.19114583333334 92.29199999999997 86.44791666666667 92.29199999999997C 116.7046875 92.29199999999997 142.63906250000002 26.369142857142833 172.89583333333334 26.369142857142833C 203.15260416666666 26.369142857142833 229.08697916666668 26.369142857142833 259.34375 26.369142857142833C 289.60052083333335 26.369142857142833 315.53489583333334 59.33057142857143 345.7916666666667 59.33057142857143C 376.0484375 59.33057142857143 401.9828125 59.33057142857143 432.2395833333333 59.33057142857143C 462.49635416666666 59.33057142857143 488.43072916666665 59.33057142857143 518.6875 59.33057142857143" pathFrom="M -1 553.7520000000001L -1 553.7520000000001L 86.44791666666667 553.7520000000001L 172.89583333333334 553.7520000000001L 259.34375 553.7520000000001L 345.7916666666667 553.7520000000001L 432.2395833333333 553.7520000000001L 518.6875 553.7520000000001"></path><g id="SvgjsG1016" class="apexcharts-series-markers-wrap" data:realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1086" r="0" cx="432.2395833333333" cy="59.33057142857143" class="apexcharts-marker wtimccgmbf no-pointer-events" stroke="#009ef7" fill="#f1faff" fill-opacity="1" stroke-width="3" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1020" class="apexcharts-series" seriesName="Complete" data:longestSeries="true" rel="2" data:realIndex="1"><path id="SvgjsPath1023" d="M0 230.73000000000002L0 191.1762857142857C30.256770833333334 191.1762857142857 56.19114583333334 191.1762857142857 86.44791666666667 191.1762857142857C116.7046875 191.1762857142857 142.63906250000002 158.21485714285717 172.89583333333334 158.21485714285717C203.15260416666666 158.21485714285717 229.08697916666668 158.21485714285717 259.34375 158.21485714285717C289.60052083333335 158.21485714285717 315.53489583333334 191.1762857142857 345.7916666666667 191.1762857142857C376.0484375 191.1762857142857 401.9828125 191.1762857142857 432.2395833333333 191.1762857142857C462.49635416666666 191.1762857142857 488.43072916666665 158.21485714285717 518.6875 158.21485714285717C518.6875 158.21485714285717 518.6875 158.21485714285717 518.6875 230.73000000000002M518.6875 158.21485714285717C518.6875 158.21485714285717 518.6875 158.21485714285717 518.6875 158.21485714285717 " fill="rgba(232,255,243,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="1" clip-path="url(#gridRectMaskwg4bvolc)" pathTo="M 0 230.73000000000002L 0 191.1762857142857C 30.256770833333334 191.1762857142857 56.19114583333334 191.1762857142857 86.44791666666667 191.1762857142857C 116.7046875 191.1762857142857 142.63906250000002 158.21485714285717 172.89583333333334 158.21485714285717C 203.15260416666666 158.21485714285717 229.08697916666668 158.21485714285717 259.34375 158.21485714285717C 289.60052083333335 158.21485714285717 315.53489583333334 191.1762857142857 345.7916666666667 191.1762857142857C 376.0484375 191.1762857142857 401.9828125 191.1762857142857 432.2395833333333 191.1762857142857C 462.49635416666666 191.1762857142857 488.43072916666665 158.21485714285717 518.6875 158.21485714285717C 518.6875 158.21485714285717 518.6875 158.21485714285717 518.6875 230.73000000000002M 518.6875 158.21485714285717z" pathFrom="M -1 553.7520000000001L -1 553.7520000000001L 86.44791666666667 553.7520000000001L 172.89583333333334 553.7520000000001L 259.34375 553.7520000000001L 345.7916666666667 553.7520000000001L 432.2395833333333 553.7520000000001L 518.6875 553.7520000000001"></path><path id="SvgjsPath1024" d="M0 191.1762857142857C30.256770833333334 191.1762857142857 56.19114583333334 191.1762857142857 86.44791666666667 191.1762857142857C116.7046875 191.1762857142857 142.63906250000002 158.21485714285717 172.89583333333334 158.21485714285717C203.15260416666666 158.21485714285717 229.08697916666668 158.21485714285717 259.34375 158.21485714285717C289.60052083333335 158.21485714285717 315.53489583333334 191.1762857142857 345.7916666666667 191.1762857142857C376.0484375 191.1762857142857 401.9828125 191.1762857142857 432.2395833333333 191.1762857142857C462.49635416666666 191.1762857142857 488.43072916666665 158.21485714285717 518.6875 158.21485714285717C518.6875 158.21485714285717 518.6875 158.21485714285717 518.6875 158.21485714285717 " fill="none" fill-opacity="1" stroke="#50cd89" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" class="apexcharts-area" index="1" clip-path="url(#gridRectMaskwg4bvolc)" pathTo="M 0 191.1762857142857C 30.256770833333334 191.1762857142857 56.19114583333334 191.1762857142857 86.44791666666667 191.1762857142857C 116.7046875 191.1762857142857 142.63906250000002 158.21485714285717 172.89583333333334 158.21485714285717C 203.15260416666666 158.21485714285717 229.08697916666668 158.21485714285717 259.34375 158.21485714285717C 289.60052083333335 158.21485714285717 315.53489583333334 191.1762857142857 345.7916666666667 191.1762857142857C 376.0484375 191.1762857142857 401.9828125 191.1762857142857 432.2395833333333 191.1762857142857C 462.49635416666666 191.1762857142857 488.43072916666665 158.21485714285717 518.6875 158.21485714285717" pathFrom="M -1 553.7520000000001L -1 553.7520000000001L 86.44791666666667 553.7520000000001L 172.89583333333334 553.7520000000001L 259.34375 553.7520000000001L 345.7916666666667 553.7520000000001L 432.2395833333333 553.7520000000001L 518.6875 553.7520000000001"></path><g id="SvgjsG1021" class="apexcharts-series-markers-wrap" data:realIndex="1"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1087" r="0" cx="432.2395833333333" cy="191.1762857142857" class="apexcharts-marker wvpftileb no-pointer-events" stroke="#50cd89" fill="#e8fff3" fill-opacity="1" stroke-width="3" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1017" class="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1022" class="apexcharts-datalabels" data:realIndex="1"></g></g><line id="SvgjsLine1080" x1="431.7395833333333" y1="0" x2="431.7395833333333" y2="230.73000000000002" stroke="#009ef7" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="431.7395833333333" y="0" width="1" height="230.73000000000002" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><line id="SvgjsLine1081" x1="0" y1="0" x2="518.6875" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1082" x1="0" y1="0" x2="518.6875" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1083" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1084" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1085" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1088" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1089" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g><g id="SvgjsG1048" class="apexcharts-yaxis" rel="0" transform="translate(12.109375, 0)"><g id="SvgjsG1049" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1051" font-family="Helvetica, Arial, sans-serif" x="20" y="31.5" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1052">84</tspan><title>84</title></text><text id="SvgjsText1054" font-family="Helvetica, Arial, sans-serif" x="20" y="77.646" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1055">77</tspan><title>77</title></text><text id="SvgjsText1057" font-family="Helvetica, Arial, sans-serif" x="20" y="123.792" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1058">70</tspan><title>70</title></text><text id="SvgjsText1060" font-family="Helvetica, Arial, sans-serif" x="20" y="169.938" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1061">63</tspan><title>63</title></text><text id="SvgjsText1063" font-family="Helvetica, Arial, sans-serif" x="20" y="216.084" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1064">56</tspan><title>56</title></text><text id="SvgjsText1066" font-family="Helvetica, Arial, sans-serif" x="20" y="262.23" text-anchor="end" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#a1a5b7" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1067">49</tspan><title>49</title></text></g></g><rect id="SvgjsRect1079" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1009" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 150px;"></div><div class="apexcharts-tooltip apexcharts-theme-light" style="left: 309.599px; top: 62.3306px;"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">Jul</div><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(241, 250, 255);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">Incomplete: </span><span class="apexcharts-tooltip-text-y-value">75 tasks</span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 2; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(232, 255, 243);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">Complete: </span><span class="apexcharts-tooltip-text-y-value">55 tasks</span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light" style="left: 456.177px; top: 262.73px;"><div class="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px; min-width: 14.9688px;">Jul</div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
          <!--end::Chart-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Graph-->
    </div>
    <!--end::Col-->

  </div>
</template>
<script setup>
definePageMeta({
  layout: "painel",
  title: 'Formulário - Visão Geral',
  middleware: 'auth',
  auth: true,
})
</script>