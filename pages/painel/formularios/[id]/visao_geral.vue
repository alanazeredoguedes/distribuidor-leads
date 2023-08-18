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
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Card-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">What's on the road?</h3>
            <div class="fs-6 text-gray-400">Total 482 participants</div>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <!--begin::Select-->
            <select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-solid form-select-sm fw-bold w-100px select2-hidden-accessible" data-select2-id="select2-data-13-wr6e" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
              <option value="1" selected="selected" data-select2-id="select2-data-15-5ksx">Options</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
              <option value="4">Option 3</option>
            </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-14-74ae" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid form-select-sm fw-bold w-100px" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-status-2k-container" aria-controls="select2-status-2k-container"><span class="select2-selection__rendered" id="select2-status-2k-container" role="textbox" aria-readonly="true" title="Options">Options</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
            <!--end::Select-->
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div class="card-body p-9 pt-4">
          <!--begin::Dates-->
          <ul class="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2" role="tablist">
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_0" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Su</span>
                <span class="fs-6 fw-bold">22</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary active" data-bs-toggle="tab" href="#kt_schedule_day_1" aria-selected="true" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Mo</span>
                <span class="fs-6 fw-bold">23</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_2" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Tu</span>
                <span class="fs-6 fw-bold">24</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_3" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">We</span>
                <span class="fs-6 fw-bold">25</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_4" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Th</span>
                <span class="fs-6 fw-bold">26</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_5" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Fr</span>
                <span class="fs-6 fw-bold">27</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_6" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Sa</span>
                <span class="fs-6 fw-bold">28</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_7" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Su</span>
                <span class="fs-6 fw-bold">29</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_8" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Mo</span>
                <span class="fs-6 fw-bold">30</span>
              </a>
            </li>
            <!--end::Date-->
            <!--begin::Date-->
            <li class="nav-item me-1" role="presentation">
              <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_9" aria-selected="false" tabindex="-1" role="tab">
                <span class="opacity-50 fs-7 fw-semibold">Tu</span>
                <span class="fs-6 fw-bold">31</span>
              </a>
            </li>
            <!--end::Date-->
          </ul>
          <!--end::Dates-->
          <!--begin::Tab Content-->
          <div class="tab-content">
            <!--begin::Day-->
            <div id="kt_schedule_day_0" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">14:30 - 15:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Walter White</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Mark Randall</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">13:00 - 14:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Peter Marcus</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_1" class="tab-pane fade show active" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">12:00 - 13:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">David Stevenson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">13:00 - 14:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Project Review &amp; Testing</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Kendell Trevor</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Kendell Trevor</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_2" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Caleb Donaldson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">14:30 - 15:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Naomi Hayabusa</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">12:00 - 13:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Yannis Gloverson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_3" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Sean Bean</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">11:00 - 11:45
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Karina Clarke</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Yannis Gloverson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_4" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">9:00 - 10:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Sean Bean</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Project Review &amp; Testing</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Karina Clarke</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Walter White</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_5" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Walter White</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Michael Walters</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">14:30 - 15:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Bob Harris</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_6" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Sean Bean</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Kendell Trevor</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">10:00 - 11:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Peter Marcus</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_7" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">13:00 - 14:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Michael Walters</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">9:00 - 10:00
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Bob Harris</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">David Stevenson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_8" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">12:00 - 13:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">David Stevenson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">11:00 - 11:45
                    <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Mark Randall</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">16:30 - 17:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Karina Clarke</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
            <!--begin::Day-->
            <div id="kt_schedule_day_9" class="tab-pane fade show" role="tabpanel">
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">12:00 - 13:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Caleb Donaldson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">12:00 - 13:00
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">David Stevenson</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
              <!--begin::Time-->
              <div class="d-flex flex-stack position-relative mt-8">
                <!--begin::Bar-->
                <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                <!--end::Bar-->
                <!--begin::Info-->
                <div class="fw-semibold ms-5 text-gray-600">
                  <!--begin::Time-->
                  <div class="fs-5">14:30 - 15:30
                    <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                  <!--end::Time-->
                  <!--begin::Title-->
                  <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                  <!--end::Title-->
                  <!--begin::User-->
                  <div class="text-gray-400">Lead by
                    <a href="#">Peter Marcus</a></div>
                  <!--end::User-->
                </div>
                <!--end::Info-->
                <!--begin::Action-->
                <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                <!--end::Action-->
              </div>
              <!--end::Time-->
            </div>
            <!--end::Day-->
          </div>
          <!--end::Tab Content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Card-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">Latest Files</h3>
            <div class="fs-6 text-gray-400">Total 382 fiels, 2,6GB space usage</div>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div class="card-body p-9 pt-3">
          <!--begin::Files-->
          <div class="d-flex flex-column mb-9">
            <!--begin::File-->
            <div class="d-flex align-items-center mb-5">
              <!--begin::Icon-->
              <div class="symbol symbol-30px me-5">
                <img alt="Icon" src="@/assets/media/svg/files/pdf.svg">
              </div>
              <!--end::Icon-->
              <!--begin::Details-->
              <div class="fw-semibold">
                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Project tech requirements</a>
                <div class="text-gray-400">2 days ago
                  <a href="#">Karina Clark</a></div>
              </div>
              <!--end::Details-->
              <!--begin::Menu-->
              <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
														</span>
                <!--end::Svg Icon-->
              </button>
              <!--begin::Menu 1-->
              <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713d16a">
                <!--begin::Header-->
                <div class="px-7 py-5">
                  <div class="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <!--end::Header-->
                <!--begin::Menu separator-->
                <div class="separator border-gray-200"></div>
                <!--end::Menu separator-->
                <!--begin::Form-->
                <div class="px-7 py-5">
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Status:</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div>
                      <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713d16a" data-allow-clear="true" data-select2-id="select2-data-16-y8n7" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option data-select2-id="select2-data-18-qh9q"></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-17-6yjq" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-h6xq-container" aria-controls="select2-h6xq-container"><span class="select2-selection__rendered" id="select2-h6xq-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Member Type:</label>
                    <!--end::Label-->
                    <!--begin::Options-->
                    <div class="d-flex">
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" value="1">
                        <span class="form-check-label">Author</span>
                      </label>
                      <!--end::Options-->
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="2" checked="checked">
                        <span class="form-check-label">Customer</span>
                      </label>
                      <!--end::Options-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Notifications:</label>
                    <!--end::Label-->
                    <!--begin::Switch-->
                    <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                      <label class="form-check-label">Enabled</label>
                    </div>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Actions-->
                  <div class="d-flex justify-content-end">
                    <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                    <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Menu 1-->
              <!--end::Menu-->
            </div>
            <!--end::File-->
            <!--begin::File-->
            <div class="d-flex align-items-center mb-5">
              <!--begin::Icon-->
              <div class="symbol symbol-30px me-5">
                <img alt="Icon" src="@/assets/media/svg/files/doc.svg">
              </div>
              <!--end::Icon-->
              <!--begin::Details-->
              <div class="fw-semibold">
                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Create FureStibe branding proposal</a>
                <div class="text-gray-400">Due in 1 day
                  <a href="#">Marcus Blake</a></div>
              </div>
              <!--end::Details-->
              <!--begin::Menu-->
              <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
														</span>
                <!--end::Svg Icon-->
              </button>
              <!--begin::Menu 1-->
              <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713d31c">
                <!--begin::Header-->
                <div class="px-7 py-5">
                  <div class="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <!--end::Header-->
                <!--begin::Menu separator-->
                <div class="separator border-gray-200"></div>
                <!--end::Menu separator-->
                <!--begin::Form-->
                <div class="px-7 py-5">
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Status:</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div>
                      <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713d31c" data-allow-clear="true" data-select2-id="select2-data-19-ob30" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option data-select2-id="select2-data-21-vjna"></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-20-qe8p" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-heq7-container" aria-controls="select2-heq7-container"><span class="select2-selection__rendered" id="select2-heq7-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Member Type:</label>
                    <!--end::Label-->
                    <!--begin::Options-->
                    <div class="d-flex">
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" value="1">
                        <span class="form-check-label">Author</span>
                      </label>
                      <!--end::Options-->
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="2" checked="checked">
                        <span class="form-check-label">Customer</span>
                      </label>
                      <!--end::Options-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Notifications:</label>
                    <!--end::Label-->
                    <!--begin::Switch-->
                    <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                      <label class="form-check-label">Enabled</label>
                    </div>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Actions-->
                  <div class="d-flex justify-content-end">
                    <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                    <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Menu 1-->
              <!--end::Menu-->
            </div>
            <!--end::File-->
            <!--begin::File-->
            <div class="d-flex align-items-center mb-5">
              <!--begin::Icon-->
              <div class="symbol symbol-30px me-5">
                <img alt="Icon" src="@/assets/media/svg/files/css.svg">
              </div>
              <!--end::Icon-->
              <!--begin::Details-->
              <div class="fw-semibold">
                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Completed Project Stylings</a>
                <div class="text-gray-400">Due in 1 day
                  <a href="#">Terry Barry</a></div>
              </div>
              <!--end::Details-->
              <!--begin::Menu-->
              <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
														</span>
                <!--end::Svg Icon-->
              </button>
              <!--begin::Menu 1-->
              <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713d4c5">
                <!--begin::Header-->
                <div class="px-7 py-5">
                  <div class="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <!--end::Header-->
                <!--begin::Menu separator-->
                <div class="separator border-gray-200"></div>
                <!--end::Menu separator-->
                <!--begin::Form-->
                <div class="px-7 py-5">
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Status:</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div>
                      <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713d4c5" data-allow-clear="true" data-select2-id="select2-data-22-uzak" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option data-select2-id="select2-data-24-mvnl"></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-23-sjxr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-y4h4-container" aria-controls="select2-y4h4-container"><span class="select2-selection__rendered" id="select2-y4h4-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Member Type:</label>
                    <!--end::Label-->
                    <!--begin::Options-->
                    <div class="d-flex">
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" value="1">
                        <span class="form-check-label">Author</span>
                      </label>
                      <!--end::Options-->
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="2" checked="checked">
                        <span class="form-check-label">Customer</span>
                      </label>
                      <!--end::Options-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Notifications:</label>
                    <!--end::Label-->
                    <!--begin::Switch-->
                    <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                      <label class="form-check-label">Enabled</label>
                    </div>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Actions-->
                  <div class="d-flex justify-content-end">
                    <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                    <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Menu 1-->
              <!--end::Menu-->
            </div>
            <!--end::File-->
            <!--begin::File-->
            <div class="d-flex align-items-center">
              <!--begin::Icon-->
              <div class="symbol symbol-30px me-5">
                <img alt="Icon" src="@/assets/media/svg/files/ai.svg">
              </div>
              <!--end::Icon-->
              <!--begin::Details-->
              <div class="fw-semibold">
                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Create Project Wireframes</a>
                <div class="text-gray-400">Due in 3 days
                  <a href="#">Roth Bloom</a></div>
              </div>
              <!--end::Details-->
              <!--begin::Menu-->
              <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
														</span>
                <!--end::Svg Icon-->
              </button>
              <!--begin::Menu 1-->
              <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713d66a">
                <!--begin::Header-->
                <div class="px-7 py-5">
                  <div class="fs-5 text-dark fw-bold">Filter Options</div>
                </div>
                <!--end::Header-->
                <!--begin::Menu separator-->
                <div class="separator border-gray-200"></div>
                <!--end::Menu separator-->
                <!--begin::Form-->
                <div class="px-7 py-5">
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Status:</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div>
                      <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713d66a" data-allow-clear="true" data-select2-id="select2-data-25-zekd" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                        <option data-select2-id="select2-data-27-bfck"></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-26-qmsw" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-q64h-container" aria-controls="select2-q64h-container"><span class="select2-selection__rendered" id="select2-q64h-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Member Type:</label>
                    <!--end::Label-->
                    <!--begin::Options-->
                    <div class="d-flex">
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" value="1">
                        <span class="form-check-label">Author</span>
                      </label>
                      <!--end::Options-->
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="2" checked="checked">
                        <span class="form-check-label">Customer</span>
                      </label>
                      <!--end::Options-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Notifications:</label>
                    <!--end::Label-->
                    <!--begin::Switch-->
                    <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                      <label class="form-check-label">Enabled</label>
                    </div>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Actions-->
                  <div class="d-flex justify-content-end">
                    <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                    <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Menu 1-->
              <!--end::Menu-->
            </div>
            <!--end::File-->
          </div>
          <!--end::Files-->
          <!--begin::Notice-->
          <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
            <!--begin::Icon-->
            <!--begin::Svg Icon | path: svg/files/upload.svg-->
            <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
													<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path opacity="0.25" d="M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z" fill="#00A3FF"></path>
														<path d="M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z" fill="#00A3FF"></path>
														<path d="M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z" fill="#00A3FF"></path>
													</svg>
												</span>
            <!--end::Svg Icon-->
            <!--end::Icon-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-semibold">
                <h4 class="text-gray-900 fw-bold">Quick file uploader</h4>
                <div class="fs-6 text-gray-700">Drag &amp; Drop or choose files from computer</div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Card body -->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Card-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">New Contibutors</h3>
            <div class="fs-6 text-gray-400">From total 482 Participants</div>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card toolbar-->
        <!--begin::Card body-->
        <div class="card-body d-flex flex-column p-9 pt-3 mb-9">
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-5">
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <img alt="Pic" src="@/assets/media/avatars/300-6.jpg">
              </div>
              <!--end::Image-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary">Emma Smith</a>
              <div class="text-gray-400">8 Pending &amp; 97 Completed Tasks</div>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <div class="badge badge-light ms-auto">5</div>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-5">
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <span class="symbol-label bg-light-danger text-danger fw-semibold">M</span>
              </div>
              <!--end::Image-->
              <!--begin::Online-->
              <div class="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
              <!--end::Online-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary">Melody Macy</a>
              <div class="text-gray-400">5 Pending &amp; 84 Completed</div>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <div class="badge badge-light ms-auto">8</div>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-5">
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <img alt="Pic" src="@/assets/media/avatars/300-1.jpg">
              </div>
              <!--end::Image-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary">Max Smith</a>
              <div class="text-gray-400">9 Pending &amp; 103 Completed</div>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <div class="badge badge-light ms-auto">9</div>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-5">
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <img alt="Pic" src="@/assets/media/avatars/300-5.jpg">
              </div>
              <!--end::Image-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary">Sean Bean</a>
              <div class="text-gray-400">3 Pending &amp; 55 Completed</div>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <div class="badge badge-light ms-auto">3</div>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center">
            <!--begin::Avatar-->
            <div class="me-5 position-relative">
              <!--begin::Image-->
              <div class="symbol symbol-35px symbol-circle">
                <img alt="Pic" src="@/assets/media/avatars/300-25.jpg">
              </div>
              <!--end::Image-->
            </div>
            <!--end::Avatar-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary">Brian Cox</a>
              <div class="text-gray-400">4 Pending &amp; 115 Completed</div>
            </div>
            <!--end::Details-->
            <!--begin::Badge-->
            <div class="badge badge-light ms-auto">4</div>
            <!--end::Badge-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-lg-6">
      <!--begin::Tasks-->
      <div class="card card-flush h-lg-100">
        <!--begin::Card header-->
        <div class="card-header mt-6">
          <!--begin::Card title-->
          <div class="card-title flex-column">
            <h3 class="fw-bold mb-1">My Tasks</h3>
            <div class="fs-6 text-gray-400">Total 25 tasks in backlog</div>
          </div>
          <!--end::Card title-->
          <!--begin::Card toolbar-->
          <div class="card-toolbar">
            <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
          </div>
          <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->
        <!--begin::Card body-->
        <div class="card-body d-flex flex-column mb-9 p-9 pt-3">
          <!--begin::Item-->
          <div class="d-flex align-items-center position-relative mb-7">
            <!--begin::Label-->
            <div class="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
            <!--end::Label-->
            <!--begin::Checkbox-->
            <div class="form-check form-check-custom form-check-solid ms-6 me-4">
              <input class="form-check-input" type="checkbox" value="">
            </div>
            <!--end::Checkbox-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-6 fw-bold text-gray-900 text-hover-primary">Create FureStibe branding logo</a>
              <!--begin::Info-->
              <div class="text-gray-400">Due in 1 day
                <a href="#">Karina Clark</a></div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
            <!--begin::Menu-->
            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
              <span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
													</span>
              <!--end::Svg Icon-->
            </button>
            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713dea8">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->
              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->
              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713dea8" data-allow-clear="true" data-select2-id="select2-data-28-gi2n" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-30-z94c"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-29-8clg" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-1bz7-container" aria-controls="select2-1bz7-container"><span class="select2-selection__rendered" id="select2-1bz7-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">Author</span>
                    </label>
                    <!--end::Options-->
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2" checked="checked">
                      <span class="form-check-label">Customer</span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                    <label class="form-check-label">Enabled</label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
            <!--end::Menu-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center position-relative mb-7">
            <!--begin::Label-->
            <div class="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
            <!--end::Label-->
            <!--begin::Checkbox-->
            <div class="form-check form-check-custom form-check-solid ms-6 me-4">
              <input class="form-check-input" type="checkbox" value="">
            </div>
            <!--end::Checkbox-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-6 fw-bold text-gray-900 text-hover-primary">Schedule a meeting with FireBear CTO John</a>
              <!--begin::Info-->
              <div class="text-gray-400">Due in 3 days
                <a href="#">Rober Doe</a></div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
            <!--begin::Menu-->
            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
              <span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
													</span>
              <!--end::Svg Icon-->
            </button>
            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713e041">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->
              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->
              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713e041" data-allow-clear="true" data-select2-id="select2-data-31-h7mz" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-33-9rlj"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-32-zgtu" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ffng-container" aria-controls="select2-ffng-container"><span class="select2-selection__rendered" id="select2-ffng-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">Author</span>
                    </label>
                    <!--end::Options-->
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2" checked="checked">
                      <span class="form-check-label">Customer</span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                    <label class="form-check-label">Enabled</label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
            <!--end::Menu-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center position-relative mb-7">
            <!--begin::Label-->
            <div class="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
            <!--end::Label-->
            <!--begin::Checkbox-->
            <div class="form-check form-check-custom form-check-solid ms-6 me-4">
              <input class="form-check-input" type="checkbox" value="">
            </div>
            <!--end::Checkbox-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-6 fw-bold text-gray-900 text-hover-primary">9 Degree Porject Estimation</a>
              <!--begin::Info-->
              <div class="text-gray-400">Due in 1 week
                <a href="#">Neil Owen</a></div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
            <!--begin::Menu-->
            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
              <span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
													</span>
              <!--end::Svg Icon-->
            </button>
            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713e1d1">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->
              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->
              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713e1d1" data-allow-clear="true" data-select2-id="select2-data-34-vked" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-36-n7fj"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-35-blzi" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-8k6z-container" aria-controls="select2-8k6z-container"><span class="select2-selection__rendered" id="select2-8k6z-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">Author</span>
                    </label>
                    <!--end::Options-->
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2" checked="checked">
                      <span class="form-check-label">Customer</span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                    <label class="form-check-label">Enabled</label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
            <!--end::Menu-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center position-relative mb-7">
            <!--begin::Label-->
            <div class="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
            <!--end::Label-->
            <!--begin::Checkbox-->
            <div class="form-check form-check-custom form-check-solid ms-6 me-4">
              <input class="form-check-input" type="checkbox" value="">
            </div>
            <!--end::Checkbox-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-6 fw-bold text-gray-900 text-hover-primary">Dashgboard UI &amp; UX for Leafr CRM</a>
              <!--begin::Info-->
              <div class="text-gray-400">Due in 1 week
                <a href="#">Olivia Wild</a></div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
            <!--begin::Menu-->
            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
              <span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
													</span>
              <!--end::Svg Icon-->
            </button>
            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713e362">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->
              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->
              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713e362" data-allow-clear="true" data-select2-id="select2-data-37-3gxk" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-39-utvd"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-38-fm0u" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-hanu-container" aria-controls="select2-hanu-container"><span class="select2-selection__rendered" id="select2-hanu-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">Author</span>
                    </label>
                    <!--end::Options-->
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2" checked="checked">
                      <span class="form-check-label">Customer</span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                    <label class="form-check-label">Enabled</label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
            <!--end::Menu-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="d-flex align-items-center position-relative">
            <!--begin::Label-->
            <div class="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
            <!--end::Label-->
            <!--begin::Checkbox-->
            <div class="form-check form-check-custom form-check-solid ms-6 me-4">
              <input class="form-check-input" type="checkbox" value="">
            </div>
            <!--end::Checkbox-->
            <!--begin::Details-->
            <div class="fw-semibold">
              <a href="#" class="fs-6 fw-bold text-gray-900 text-hover-primary">Mivy App R&amp;D, Meeting with clients</a>
              <!--begin::Info-->
              <div class="text-gray-400">Due in 2 weeks
                <a href="#">Sean Bean</a></div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
            <!--begin::Menu-->
            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
              <span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
															<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
															</g>
														</svg>
													</span>
              <!--end::Svg Icon-->
            </button>
            <!--begin::Menu 1-->
            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_62cfb9713e4f1">
              <!--begin::Header-->
              <div class="px-7 py-5">
                <div class="fs-5 text-dark fw-bold">Filter Options</div>
              </div>
              <!--end::Header-->
              <!--begin::Menu separator-->
              <div class="separator border-gray-200"></div>
              <!--end::Menu separator-->
              <!--begin::Form-->
              <div class="px-7 py-5">
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Status:</label>
                  <!--end::Label-->
                  <!--begin::Input-->
                  <div>
                    <select class="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_62cfb9713e4f1" data-allow-clear="true" data-select2-id="select2-data-40-2t0v" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                      <option data-select2-id="select2-data-42-wd2q"></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-41-omtf" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-bwq7-container" aria-controls="select2-bwq7-container"><span class="select2-selection__rendered" id="select2-bwq7-container" role="textbox" aria-readonly="true" title="Select option"><span class="select2-selection__placeholder">Select option</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Member Type:</label>
                  <!--end::Label-->
                  <!--begin::Options-->
                  <div class="d-flex">
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input class="form-check-input" type="checkbox" value="1">
                      <span class="form-check-label">Author</span>
                    </label>
                    <!--end::Options-->
                    <!--begin::Options-->
                    <label class="form-check form-check-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="2" checked="checked">
                      <span class="form-check-label">Customer</span>
                    </label>
                    <!--end::Options-->
                  </div>
                  <!--end::Options-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="mb-10">
                  <!--begin::Label-->
                  <label class="form-label fw-semibold">Notifications:</label>
                  <!--end::Label-->
                  <!--begin::Switch-->
                  <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked">
                    <label class="form-check-label">Enabled</label>
                  </div>
                  <!--end::Switch-->
                </div>
                <!--end::Input group-->
                <!--begin::Actions-->
                <div class="d-flex justify-content-end">
                  <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                  <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                </div>
                <!--end::Actions-->
              </div>
              <!--end::Form-->
            </div>
            <!--end::Menu 1-->
            <!--end::Menu-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Tasks-->
    </div>
    <!--end::Col-->
  </div>
</template>
<script setup>
definePageMeta({
  layout: "painel",
  title: 'Editar Formulário - Visão Geral',
  middleware: 'auth',
  auth: true,
})
</script>