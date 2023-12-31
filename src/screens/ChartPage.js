import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const LineData = [
  { value: 20, label: "1" },
  { value: 30, label: "3" },
  { value: -23, label: "4" },
  { value: 40, label: "5" },
  { value: -16, label: "7" },
  { value: 40, label: "10" },
  { value: 15, label: "12" },
  { value: 30, label: "13" },
  { value: -23, label: "14" },
  { value: 40, label: "15" },
  { value: -16, label: "17" },
  { value: 40, label: "20" },
];

const Container = styled.View`
  flex: 1;
  justify-content: flex-start; /* flex-start로 변경하여 상단에서부터 시작하도록 설정 */
  align-items: center;
  background-color: #fff9f2;
`;

const Section1 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Section2 = styled.View`
  flex: 0.2;
  background-color: orange;
  padding: 20px;
  width: 100%;
`;

const Section3 = styled.View`
  flex: 3; /* 그래프 차트가 더 많은 공간을 차지하도록 설정 */
`;

const Section4 = styled.View`
  flex: 0.5; /* 작은 섹션으로 설정 */
  background-color: white;
  justify-content: center;
  align-items: center;
`;

// 차트 나누는 버튼 디자인
const ChartButton = styled.TouchableOpacity`
  flex: 0.3;
  background-color: gray;
  width: 100%;
  height: 100%;
  justifycontent: "center";
  alignitems: "center";
  text-align: "center";
  border: 2px solid white;
  border-radius: 10%;
`;

const ChartText = styled.Text`
  text-align: center;
  align-items: center;
  justifycontent: center;
  font-size: 20px;
  font-weight: bold;
`;

export default function ChartPage() {
  // 평균 계산 로직을 추가
  const average =
    LineData.reduce((sum, data) => sum + data.value, 0) / LineData.length;

  function handleMonthChartAlert() {
    alert("월별 차트 눌림");
    // return;
  }
  function handleDayChartAlert() {
    alert("월별 차트 눌림");
    // return;
  }

  return (
    <Container>
      {/* <Section1>
        <Text>감정 분석 차트</Text>
      </Section1> */}

      <Section2>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <ChartButton onPress={handleMonthChartAlert}>
            <ChartText>월별 차트</ChartText>
          </ChartButton>
          <ChartButton onPress={handleDayChartAlert}>
            <ChartText>일별 차트</ChartText>
          </ChartButton>
        </View>
      </Section2>

      <Section3>
        <ScrollView scrollEventThrottle={15}>
          <LineChart
            areaChart
            data={LineData}
            startFillColor="rgb(46, 217, 255)"
            startOpacity={0.8}
            endFillColor="rgb(203, 241, 250)"
            endOpacity={0.3}
            scrollEventThrottle={16}
            width={350}
            // pointerConfig={{}}
          />
        </ScrollView>
      </Section3>

      <Section4>
        <Text>평균 점수: {average.toFixed(2)}점</Text>
      </Section4>
    </Container>
  );
}
