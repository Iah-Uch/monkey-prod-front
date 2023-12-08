import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GitHubCommits = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {

      const token = await AsyncStorage.getItem('token');
      const repo = await AsyncStorage.getItem('repository');
      const owner = await AsyncStorage.getItem('username');
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCommits(data);
        } else {
          console.error('Falha ao obter os commits:', response.status);
        }
      } catch (error) {
        console.error('Erro ao buscar os commits:', error);
      }
    };

    fetchCommits();
  }, []);

  return (
    <View>
      <Text>Lista de Commits:</Text>
      {commits.map(commit => (
        <View key={commit.sha}>
          <Text>{commit.sha}</Text>
          <Text>{commit.commit.author.name}</Text>
          <Text>{commit.commit.message}</Text>
        </View>
      ))}
    </View>
  );
};

export default GitHubCommits;
