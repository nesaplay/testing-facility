import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#EF6C00',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#EF6C00',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a'
};

const steps = [
	{
		id: '1',
		message: 'What number I am thinking?',
		trigger: '2'
	},
	{
		id: '2',
		options: [
			{ value: 1, label: 'Number 1', trigger: '4' },
			{ value: 2, label: 'Number 2', trigger: '3' },
			{ value: 3, label: 'Number 3', trigger: '3' }
		]
	},
	{
		id: '3',
		message: 'Wrong answer, try again.',
		trigger: '2'
	},
	{
		id: '4',
		message: 'Awesome! You are a telepath!',
		end: true
	}
];

// const ThemedExample = () => (
// 	<ThemeProvider theme={theme}>
// 		<ChatBot steps={steps} />;
// 	</ThemeProvider>
// );

const ChatbotReady = () => <ChatBot steps={steps} />;

export default ChatbotReady;
